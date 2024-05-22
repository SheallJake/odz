import './styles/App.css';
import Header from './components/Header';
import FilmList from './components/FilmList';
import { useState } from 'react';
import FilmPlayList from "./components/FilmPlaylist";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilmPage from "./components/FilmPage";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const addToPlaylist = (film) => {
    setPlaylist([...playlist, film]);
  };

  const removeFromPlaylist = (film) => {
    setPlaylist(playlist.filter(listFilm => listFilm.id !== film.id));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header playlist={playlist} />
        <Routes>
          <Route path="/" element={<FilmList playlist={playlist} addToPlaylist={addToPlaylist} />} />
          <Route path="/FilmPlaylist" element={<FilmPlayList playlist={playlist} removeFromPlaylist={removeFromPlaylist} />} />
          <Route path="/:id" element={<FilmPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
