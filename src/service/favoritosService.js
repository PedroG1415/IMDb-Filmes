import axios from "axios";

const APP_ID = "Eqasy9rrHQaSwfSTH9hFo1ToUoMea1xKchbKsv09";
const API_KEY = "tYG5SbTrzhVYOr4UHMx2tdwgNcDO2oQUpDxdH0Vg";
const CLASS_NAME = "Favoritos";

const headers = {
  "X-Parse-Application-Id": APP_ID,
  "X-Parse-REST-API-Key": API_KEY,
  "Content-Type": "application/json"
};

// Buscar todos os favoritos
export const getFavoritos = async () => {
  const res = await axios.get(
    `https://parseapi.back4app.com/classes/${CLASS_NAME}`,
    { headers }
  );
  return res.data.results;
};

// Salvar um novo favorito
export const salvarFavorito = async (filme) => {
  try {
    const res = await axios.post(
      `https://parseapi.back4app.com/classes/${CLASS_NAME}`,
      {
        titulo: filme.Title,
        ano: filme.Year,
        poster: filme.Poster,
        imdbID: filme.imdbID
      },
      { headers }
    );
    return res.data;
  } catch (error) {
    console.error("Erro ao salvar favorito:", error);
    throw error;
  }
};

// Remover favorito por objectId
export const removerFavorito = async (objectId) => {
  try {
    await axios.delete(
      `https://parseapi.back4app.com/classes/${CLASS_NAME}/${objectId}`,
      { headers }
    );
  } catch (error) {
    console.error("Erro ao remover favorito:", error);
    throw error;
  }
};
