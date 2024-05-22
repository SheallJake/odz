import React, { useState, useEffect } from 'react';
import Film from './Film';

function FilmList() {
    const [movies, setMovies] = useState([]); // Create an empty movies state array

    useEffect(() => {
        const fetch = require('node-fetch');
        const key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2M2MDYzN2Y0ZTc1YjExMjE5OTc2MTY0ZDQ1YWQ4ZiIsInN1YiI6IjY2NGRlNjE2MDViNjY3ZTNlZDA2MTc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1jKaRkDCLCBL4TVJh1w1KCIkkJQXo6jLqtrzLLDBHLQ'; // Replace with your actual TMDb API key

        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${key}`, // Use template literal for cleaner string
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setMovies(json.results)) // Update movies state with fetched results
            .catch(err => console.error('error:', err));
    }, []);

    return (
        <div>
            <h1>FilmList</h1>
            {movies.map(movie => ( // Loop through movies array and render Film components
                <Film key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default FilmList;
