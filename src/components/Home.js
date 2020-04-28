import React, { useState, useEffect } from "react";

// import components
import HeroImage from "./elements/HeroImage.js";
import Spinner from "./elements/Spinner.js";
import Grid from "./elements/Grid.js";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import SearchBar from "./elements/SearchBar.js";
import MovieThumb from "./elements/MovieThumb.js";

// importing use home fetch
import { useHomeFetch } from './hooks/useHomeFetch.jsx';

import {
  API_KEY,
  API_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../config.js";

const Home = () => {

    const [{loading, error, state}, fetchMovies] = useHomeFetch();
    console.log(state);

    return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default Home;
