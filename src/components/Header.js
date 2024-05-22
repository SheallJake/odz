import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Header.css';

function Header(playlist) {
    const [playlistCount, setPlaylistCount] = useState(playlist.playlist.length);
    useEffect(() => {
        setPlaylistCount(playlist.playlist.length);
    }, [playlist]);
    return (
        <header>
            <Link className='header-title-link' to={"/"} >
                <div className="header-title">
                    <h1>NWYM</h1>
                    <h4>Night with your movie</h4>
                </div>
            </Link>
            <Link to={"/FilmPlaylist"}>
                <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/cinema-.png" alt="cinema-" />
            </Link>
            <div className="circle-indicator">{playlistCount}</div>
        </header>
    );
}
export default Header;