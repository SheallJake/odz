import { useEffect, useState } from 'react';

function Film({ movie }) {

    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        const fetch = require('node-fetch');
        const url = 'https://api.themoviedb.org/3/movie/' + movie.id;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer YOUR_API_KEY'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                const results = json.results;
                results.forEach(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                    setImgUrl(posterUrl);
                });
            })
            .catch(err => console.error('error:' + err));
    })



    return (
        <div>
            <h1>{movie.title}</h1>
            <img alt="" />
        </div>
    );
}

export default Film;