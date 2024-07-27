document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input').value;
    if (searchInput) {
        searchMovies(searchInput);
    }
});

async function searchMovies(query) {
    const apiKey = '2aa7d71b';
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('movie-details').innerHTML = '';
    
    try {
        const response = await fetch(url);
        const data = await response.json();      
        if (data.Response === 'True') {
            displaySearchResults(data.Search);
        } else {
            document.getElementById('search-results').innerHTML = `<p>${data.Error}</p>`;
        }
    } catch (error) {
        document.getElementById('search-results').innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
}

function displaySearchResults(movies) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie-item';
        movieElement.innerText = `${movie.Title} (${movie.Year})`;
        movieElement.addEventListener('click', () => fetchMovieDetails(movie.imdbID));
        
        resultsContainer.appendChild(movieElement);
    });
}

async function fetchMovieDetails(movieId) {
    const apiKey = '2aa7d71b';
    const url = `https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`;
    document.getElementById('movie-details').innerHTML = '';
    document.getElementById('search-results'). style.display='none'
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.Response === 'True') {
            displayMovieDetails(data);
        } else {
            document.getElementById('movie-details').innerHTML = `<p>${data.Error}</p>`;
        }
    } catch (error) {
        document.getElementById('movie-details').innerHTML = '<p>Something went wrong. Please try again later.</p>';
}
}

function displayMovieDetails(movie) {
    const detailsContainer = document.getElementById('movie-details');
    detailsContainer.innerHTML = `
        <h2>${movie.Title} (${movie.Year})</h2>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Released:</strong> ${movie.Released}</p>
        <p><strong>Summary:</strong> ${movie.Plot}</p>
        <img src="${movie.Poster}" alt="${movie.Title}">
    `;
}
