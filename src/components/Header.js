import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <Link className='header-title-link' to={"/"}>
                <div className="header-title">
                    <h1>NWYM</h1>
                    <h4>Night with your movie</h4>
                </div>
            </Link>
            <Link to={"/FilmPlaylist"}>
                <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/cinema-.png" alt="cinema-" />
            </Link>

        </header>
    );
}
export default Header;