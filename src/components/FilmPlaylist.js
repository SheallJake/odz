import React, { useState } from 'react';
import Film from './Film';

function FilmPlaylist({ playlist, removeFromPlaylist }) {

    const [films, setFilms] = useState([]);

    return (
        <div>
            <div className='film-list'>
                {playlist.length > 0 ? playlist.map(movie => (
                    <Film key={movie.id} movie={movie} inPlaylist={true} removeFromPlaylist={removeFromPlaylist} playlist={playlist} />
                )) : <h1 className='playlist-empty-title'>Playlist is empty</h1>}
            </div>
        </div>
    );
}

export default FilmPlaylist;