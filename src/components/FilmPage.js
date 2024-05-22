import { useLocation } from 'react-router-dom';
import '../styles/filmPage.css';

function FilmPage({ }) {
    const location = useLocation();
    const movie = location.state?.movie;
    console.log(movie);

    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (

        <div className="film-page">
            <div className="film-poster">
                <h1>{movie.title}</h1>
                <img src={posterUrl} alt="" />
            </div>
            <hr />
            <div className='RightSide'>
                <div className='film-info'>
                    <h2>Release date</h2>
                    <p>{movie.release_date}</p>
                    <h2>Rating</h2>
                    <p>{movie.vote_average}</p>
                    <h2>Description</h2>
                    <p>{movie.overview}</p>
                    <h2>Original language</h2>
                    <p>{movie.original_language}</p>
                    <h2>Popularity</h2>
                    <p>{movie.popularity}</p>
                    <h2>Adult?</h2>
                    <p>{movie.adult ? 'Yes' : 'No'}</p>
                </div>
            </div>
        </div >
    );
}

export default FilmPage;