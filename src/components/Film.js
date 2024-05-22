import { useEffect, useState } from 'react';

function Film({ movie, addToPlaylist }) {

    const [imgUrl, setImgUrl] = useState('');
    const key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2M2MDYzN2Y0ZTc1YjExMjE5OTc2MTY0ZDQ1YWQ4ZiIsInN1YiI6IjY2NGRlNjE2MDViNjY3ZTNlZDA2MTc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1jKaRkDCLCBL4TVJh1w1KCIkkJQXo6jLqtrzLLDBHLQ'
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


    console.log(imgUrl);

    return (
        <div className='film-card'>
            <img src={posterUrl} alt="" />
            <h1>{movie.title}</h1>
            <button onClick={() => addToPlaylist(movie)}>Add to playlist</button>
        </div>
    );
}

export default Film;