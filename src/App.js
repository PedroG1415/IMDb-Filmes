import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";
import FavoritesModal from "./components/FavoritesModal";
import { getFavoritos, salvarFavorito, removerFavorito } from "./service/favoritosService";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  // Carregar favoritos do Back4App ao abrir
  useEffect(() => {
    carregarFavoritos();
  }, []);

  const carregarFavoritos = async () => {
    const favs = await getFavoritos();
    setFavorites(favs);
  };

  const handleSearch = async () => {
    if (!searchTerm) return;
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=6e1e563b`
    );
    setMovies(res.data.Search || []);
  };

  const toggleFavorite = async (movie) => {
    // Verifica se o filme já está nos favoritos pelo imdbID
    const favExistente = favorites.find((fav) => fav.imdbID === movie.imdbID);

    if (favExistente) {
      await removerFavorito(favExistente.objectId);
      setFavorites((prev) => prev.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      const novo = await salvarFavorito(movie);
      setFavorites((prev) => [...prev, { ...movie, objectId: novo.objectId }]);
    }
  };

  return (
    <div className="container">
      <h1>Catálogo de Filmes</h1>
      <div className="searchContainer">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar filmes..."
        />
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={() => setShowFavorites(true)} style={{ marginLeft: "1rem" }}>
          Ver Favoritos ({favorites.length})
        </button>
      </div>
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      {showFavorites && (
        <FavoritesModal
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          onClose={() => setShowFavorites(false)}
        />
      )}
    </div>
  );
}

export default App;
