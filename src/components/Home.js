import React, { useState } from "react";

// import components
import HeroImage from "./elements/HeroImage.js";
import Spinner from "./elements/Spinner.js";
import Grid from "./elements/Grid.js";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import SearchBar from "./elements/SearchBar.js";
import MovieThumb from "./elements/MovieThumb.js";

// importing use home fetch
import { useHomeFetch } from './hooks/useHomeFetch';

// no image import
import NoImage from './images/no_image.jpg';

import {
  API_KEY,
  API_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../config.js";

const Home = () => {

    const [
        {
            state : { movies, currentPage, totalPages, heroImage },
            error,
            loading
        },
        fetchMovies
    ] = useHomeFetch();
    const [searchTerm, setSearchTerm] = useState(''); // Do not forget to initialize

    const loadMoreMovies = () => {
        const searchEndPoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage + 1}`;
        const popularEndPoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage + 1}`;
        
        const endpoint = searchTerm ? searchEndPoint : popularEndPoint;

        fetchMovies(endpoint);
        
    };
    
    if(error) return <div>Something went wrong . . . </div>;
    if(!movies[0]) return <Spinner/>;

    return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchTerm ? 'Search result' : 'Popular movies'}>
        {movies.map(movie => (
           <MovieThumb
              key={movie.id}
              clickable
            image={movie.poster_path ?
                   `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                   : NoImage}
              movieId={movie.id}
              movieName={movie.original_title}
            />
        ))}        
      </Grid>
      { loading && <Spinner />}
      { currentPage < totalPages && !loading &&
        (<LoadMoreBtn text='Load More' callback={loadMoreMovies}/>)}
    </>
  );
};

export default Home;
