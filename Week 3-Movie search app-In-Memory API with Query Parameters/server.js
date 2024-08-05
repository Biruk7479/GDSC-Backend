const http = require('http');
const url = require('url');
const port = 3000;

let movies = [
    { id: 1, title: "Cars", releaseDate: "2006", genre: "Animation, Adventure, Comedy", plot: "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.", poster: "https://example.com/cars.jpg", director: "John Lasseter, Joe Ranft", actors: "Owen Wilson, Bonnie Hunt" },
    { id: 2, title: "Game of Thrones", releaseDate: "2011", genre: "Action, Adventure, Drama", plot: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.", poster: "https://example.com/gameofthrones.jpg", director: "David Benioff, D.B. Weiss", actors: "Emilia Clarke, Peter Dinklage" },
    { id: 3, title: "Peaky Blinders", releaseDate: "2013", genre: "Crime, Drama", plot: "A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.", poster: "https://example.com/peakyblinders.jpg", director: "Otto Bathurst, Tom Harper", actors: "Cillian Murphy, Paul Anderson" },
    { id: 4, title: "Inception", releaseDate: "2010", genre: "Action, Sci-Fi", plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", poster: "https://example.com/inception.jpg", director: "Christopher Nolan", actors: "Leonardo DiCaprio, Joseph Gordon-Levitt" },
    { id: 5, title: "Rick and Morty", releaseDate: "2013", genre: "Animation, Adventure, Comedy", plot: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.", poster: "https://example.com/rickandmorty.jpg", director: "Dan Harmon, Justin Roiland", actors: "Justin Roiland, Chris Parnell" }
];

const requestListener = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query.s;
    const path = parsedUrl.pathname;

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (path === '/search') {
        if (!query) {
            res.writeHead(400);
            res.end(JSON.stringify({ error: "Missing search term" }));
        } else {
            const results = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
            if (results.length === 0) {
                res.writeHead(404);
                res.end(JSON.stringify({ error: "Movie not found" }));
            } else {
                res.writeHead(200);
                res.end(JSON.stringify(results));
            }
        }
    } else if (path.startsWith('/movie/')) {
        const movieId = parseInt(path.split('/').pop());
        const movie = movies.find(movie => movie.id === movieId);

        if (!movie) {
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Movie not found" }));
        } else {
            res.writeHead(200);
            res.end(JSON.stringify(movie));
        }
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not found" }));
    }
};

const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
