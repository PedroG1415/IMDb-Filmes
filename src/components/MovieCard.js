import React from "react";
import styles from "./MovieCard.module.css";

function MovieCard({ movie, isFavorite, toggleFavorite }) {
  return (
    <div className={styles.card}>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <button onClick={() => toggleFavorite(movie)}>
        {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
      </button>
    </div>
  );
}

export default MovieCard;
