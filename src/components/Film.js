import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Film({ playlist, movie, addToPlaylist, removeFromPlaylist, inPlaylist }) {

    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
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
            <Link className='film-link' key={'link' + movie.id} to={`/${movie.id}`} state={{ movie }}>
                <img src={posterUrl} alt="" />
            </Link>
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