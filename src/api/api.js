import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend.labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return response.data;
  } catch (error) {
    console.error("fetchTopAlbums Error:", error);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return response.data;
  } catch (error) {
    console.error("fetchNewAlbums Error:", error);
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return response.data;
  } catch (error) {
    console.error("fetchSongs Error:", error);
  }
};

export const fetchFilters = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    return response.data;
  } catch (error) {
    console.error("fetchFilters Error:", error);
  }
};
