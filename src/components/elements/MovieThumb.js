import React from 'react';
import { StyledMovieThumb } from '../styles/StyledMovieThumb';


const MovieThumb = ({image, movieId, clickable}) => (
    <StyledMovieThumb>
    {clickable ?
     <img clickable={image} src={image} alt="moviethumb"/> :
    <img src={image} alt="moviethumb"/>}
    </StyledMovieThumb>
);

export default MovieThumb;
