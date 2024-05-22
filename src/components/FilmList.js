import React, { useState, useEffect } from 'react';
import Film from './Film';
import { Link } from "react-router-dom";

function FilmList({ playlist, addToPlaylist }) {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetch = require('node-fetch');
        const key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2M2MDYzN2Y0ZTc1YjExMjE5OTc2MTY0ZDQ1YWQ4ZiIsInN1YiI6IjY2NGRlNjE2MDViNjY3ZTNlZDA2MTc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1jKaRkDCLCBL4TVJh1w1KCIkkJQXo6jLqtrzLLDBHLQ'; // Replace with your actual TMDb API key

        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${key}`,
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setMovies(json.results))
            .catch(err => console.error('error:', err));
    }, [page]);

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };

    return (
        <div>
            <h1 className='list-title'>List of movies</h1>
            <div className='film-list'>
                {movies.map(movie => (
                    <Film key={movie.id} movie={movie} addToPlaylist={addToPlaylist} inPlaylist={false} playlist={playlist} />
                ))}
            </div>
            <div className='pagination'>
                <button onClick={handlePreviousPage} disabled={page === 1}>
                    Previous Page
                </button>
                <span>Page {page}</span>
                <button onClick={handleNextPage}>
                    Next Page
                </button>
            </div>
        </div>
    );
}

export default FilmList;
