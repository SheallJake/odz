import React, { useState } from 'react';
import Film from './Film';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/animation.css';

function FilmPlaylist({ playlist, removeFromPlaylist }) {

    return (
        <div>
            <TransitionGroup className={`film-list`}>
                {playlist.length > 0 ? playlist.map(movie => (
                    <CSSTransition key={'anim' + movie.id} timeout={200} classNames="fade">
                        <Film key={movie.id} movie={movie} inPlaylist={true} removeFromPlaylist={removeFromPlaylist} playlist={playlist} />
                    </CSSTransition>
                )) : <h1 className='playlist-empty-title'>Playlist is empty</h1>}
            </TransitionGroup>
        </div>
    );
}

export default FilmPlaylist;