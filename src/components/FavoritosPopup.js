import React from "react";
import styles from "./FavoritosPopup.module.css";

const FavoritosPopup = ({ favoritos, onClose, onRemover }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2>Favoritos</h2>
        <button className={styles.fechar} onClick={onClose}>Fechar</button>
        <div className={styles.grid}>
          {favoritos.map((filme) => (
            <div key={filme.imdbID} className={styles.card}>
              <img src={filme.Poster} alt={filme.Title} />
              <h3>{filme.Title}</h3>
              <button onClick={() => onRemover(filme)}>Remover</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritosPopup;
