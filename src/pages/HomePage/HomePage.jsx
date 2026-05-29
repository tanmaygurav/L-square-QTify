import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
  fetchFilters,
} from "../../api/api";
import Hero from "../../components/Hero/Hero";
import styles from "./HomePage.module.css";
import Section from "../../components/Section/Section";

function HomePage() {
  // const { data } = useOutletContext();
  // const { newAlbums, topAlbums, songs, genres } = data;

  const [data, setData] = useState({
    topAlbums: [],
    newAlbums: [],
    songs: [],
    genres: [],
  });

  useEffect(() => {
    const getDataFromAPI = async () => {
      try {
        const topAlbums = await fetchTopAlbums();
        const newAlbums = await fetchNewAlbums();
        const songs = await fetchSongs();
        const genres = await fetchFilters();

        setData({ topAlbums, newAlbums, songs, genres });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    getDataFromAPI();
  }, []);

  // console.log("topAlbums", data.topAlbums);
  // console.log("newAlbums", data.newAlbums);
  // console.log("songs", data.songs);
  // console.log("genres", data.genres);

  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.wrapper}>
        <Section title={"Top Albums"} data={data.topAlbums} type="album" />
        <Section title={"New Albums"} data={data.newAlbums} type="album" />
        <Section
          title={"Songs"}
          data={data.songs}
          filterSource={fetchFilters}
          type="song"
        />
      </div>
    </>
  );
}

export default HomePage;
