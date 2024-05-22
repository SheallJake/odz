import { useEffect, useState } from 'react';

function Film({ playlist, movie, addToPlaylist, removeFromPlaylist, inPlaylist }) {

    const key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2M2MDYzN2Y0ZTc1YjExMjE5OTc2MTY0ZDQ1YWQ4ZiIsInN1YiI6IjY2NGRlNjE2MDViNjY3ZTNlZDA2MTc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1jKaRkDCLCBL4TVJh1w1KCIkkJQXo6jLqtrzLLDBHLQ'
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const test = 2;

    const button = document.getElementById("playlistButton");

    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        setIsAdded(playlist.some(film => film.id === movie.id)); // Check if movie exists
    }, [playlist, movie]); // Update on movie or playlist change

    const handleClick = () => {
        if (!isAdded) {
            addToPlaylist(movie);
        }
        setIsAdded(true);
    };

    return (
        <div className='film-card'>
            <img src={posterUrl} alt="" />
            <h1>{movie.title}</h1>
            {inPlaylist ?
                (<button className='add-remove-button' onClick={() => removeFromPlaylist(movie)}>Remove from playlist</button>
                ) : (
                    <button className='add-remove-button' onClick={handleClick} disabled={isAdded}>
                        {isAdded ? 'In Playlist' : 'Add to playlist'}
                    </button>)}
        </div>
    );
}

export default Film;