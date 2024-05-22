import FilmPlayList from "./FilmPlaylist";

function Header() {
    return (
        <header>
            <div className="header-title">
                <h1>NWYM</h1>
                <h4>Night with your movie</h4>
            </div>
            <FilmPlayList />

        </header>
    );
}
export default Header;