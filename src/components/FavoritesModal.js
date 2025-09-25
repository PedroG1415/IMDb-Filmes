import React from "react";
import styles from "./FavoritesModal.module.css";

function FavoritesModal({ favorites, toggleFavorite, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Favoritos</h2>
        <button onClick={onClose} className={styles.closeBtn}>Fechar</button>
        {favorites.length === 0 ? (
          <p>Nenhum filme favorito ainda.</p>
        ) : (
          <ul>
            {favorites.map((movie) => (
              <li key={movie.imdbID}>
                {movie.Title}
                <button onClick={() => toggleFavorite(movie)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FavoritesModal;
