import React, { useState } from 'react';
import Film from './Film';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/animation.css';

function FilmPlaylist({ playlist, removeFromPlaylist }) {

    return (
        <div>
            <h1 className='list-title'>Playlist</h1>
            <TransitionGroup className={`film-list`}>
                {playlist.length > 0 ? playlist.map(movie => (
                    <CSSTransition key={'anim' + movie.id} timeout={200} classNames="fade">
                        <Film key={movie.id} movie={movie} inPlaylist={true} removeFromPlaylist={removeFromPlaylist} playlist={playlist} />
                    </CSSTransition>
                )) : <h2 className='playlist-empty-title'>Playlist is empty</h2>}
            </TransitionGroup>
        </div>
    );
}

export default FilmPlaylist;