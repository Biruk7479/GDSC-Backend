document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input').value;
    if (searchInput) {
        searchMovies(searchInput);
    }
});

async function searchMovies(query) {
    const url = `http://localhost:3000/search?s=${query}`;
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('movie-details').innerHTML = '';

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok && data.length > 0) {
            displaySearchResults(data);
        } else {
            document.getElementById('search-results').innerHTML = `<p>${data.error || 'No results found'}</p>`;
        }
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('search-results').innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
}

function displaySearchResults(movies) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie-item';
        movieElement.innerText = `${movie.title} (${movie.releaseDate})`;
        movieElement.addEventListener('click', () => fetchMovieDetails(movie.id));

        resultsContainer.appendChild(movieElement);
    });
}

async function fetchMovieDetails(movieId) {
    const url = `http://localhost:3000/movie/${movieId}`;
    document.getElementById('movie-details').innerHTML = '';

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            displayMovieDetails(data);
        } else {
            document.getElementById('movie-details').innerHTML = `<p>${data.error}</p>`;
        }
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('movie-details').innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
}

function displayMovieDetails(movie) {
    const detailsContainer = document.getElementById('movie-details');
    detailsContainer.innerHTML = `
        <h2>${movie.title} (${movie.releaseDate})</h2>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Released:</strong> ${movie.releaseDate}</p>
        <p><strong>Summary:</strong> ${movie.plot}</p>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Actors:</strong> ${movie.actors}</p>
        <img src="${movie.poster}" alt="${movie.title}">
    `;
}
