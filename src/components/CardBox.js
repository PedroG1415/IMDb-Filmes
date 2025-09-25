import React from "react";
import MovieCard from "./MovieCard";
import styles from "./CardBox.module.css";

const CardBox = ({ filmes, onAdicionar, onRemover, favoritos }) => {
  return (
    <div className={styles.container}>
      {filmes.map((filme) => (
        <MovieCard
          key={filme.imdbID}
          filme={filme}
          onAdicionar={onAdicionar}
          onRemover={onRemover}
          isFavorito={favoritos.some(f => f.imdbID === filme.imdbID)}
        />
      ))}
    </div>
  );
};

export default CardBox;
