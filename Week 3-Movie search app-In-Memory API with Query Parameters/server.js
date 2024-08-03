const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

let movies = [
    { id: 1, title: "Cars", releaseDate: "2006", genre: "Animation, Adventure, Comedy", plot: "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.", poster: "https://images.app.goo.gl/1wwf6m1AV8xnpPnY7", director: "John Lasseter, Joe Ranft", actors: "Owen Wilson, Bonnie Hunt" },
    { id: 2, title: "Game of Thrones", releaseDate: "2011", genre: "Action, Adventure, Drama", plot: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.", poster: "https://images.app.goo.gl/xkZuxCQYPiD3Txw8A", director: "David Benioff, D.B. Weiss", actors: "Emilia Clarke, Peter Dinklage" },
    { id: 3, title: "Peaky Blinders", releaseDate: "2013", genre: "Crime, Drama", plot: "A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.", poster: "https://images.app.goo.gl/5nNkjF1vJ4xt89zA8", director: "Otto Bathurst, Tom Harper", actors: "Cillian Murphy, Paul Anderson" },
    { id: 4, title: "Inception", releaseDate: "2010", genre: "Action, Sci-Fi", plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", poster: "https://images.app.goo.gl/nSZ82y6fFNZ3HJgXA", director: "Christopher Nolan", actors: "Leonardo DiCaprio, Joseph Gordon-Levitt" },
    { id: 5, title: "Rick and Morty", releaseDate: "2013", genre: "Animation, Adventure, Comedy", plot: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.", poster: "https://images.app.goo.gl/ZmH3FXxv6D6u8AzL9", director: "Dan Harmon, Justin Roiland", actors: "Justin Roiland, Chris Parnell" }
];

app.use(express.json());
app.get('/search', (req, res) => {
    const query = req.query.s;
    if (!query) {
        return res.status(400).json({ error: "Missing search term" });
    }

    const results = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    if (results.length === 0) {
        return res.status(404).json({ error: "Movie not found" });
    }

    res.json(results);
});

app.get('/movie/:id', (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(movie => movie.id === movieId);

    if (!movie) {
        return res.status(404).json({ error: "Movie not found" });
    }

    res.json(movie);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
