import React, { useState } from 'react';
import Film from './Film';

function FilmPlaylist({ addToPlaylist }) {

    const [films, setFilms] = useState([]);

    return (
        <div>
            <div>
                {films.length > 0 ? films.map(movie => (
                    <Film key={movie.id} movie={movie} addToPlaylist={addToPlaylist} />
                )) : <p>Playlist is empty</p>}
            </div>
        </div>
    );
}

export default FilmPlaylist;