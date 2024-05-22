import './styles/App.css';
import Header from './components/Header';
import FilmList from './components/FilmList';
import { useState } from 'react';
import FilmPlayList from "./components/FilmPlaylist";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [playlist, setPlaylist] = useState([]);
  const addToPlaylist = (film) => {
    const playlistFilm = [playlist.length + 1, film]
    setPlaylist([...playlist, playlistFilm]);
  };

  const removeFromPlaylist = (film) => {
    setPlaylist(playlist.filter(listFilm => listFilm.id !== film.id));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<FilmList playlist={playlist} addToPlaylist={addToPlaylist} />} />
          <Route path="/FilmPlaylist" element={<FilmPlayList addToPlaylist={addToPlaylist} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
