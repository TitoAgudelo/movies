import React, { useState } from "react";
import styled from "styled-components";

import { useStateMovies } from "../../providers/MoviesProvider/MoviesProvider";
import MovieCard from "../MovieCard/MovieCard";

const Movies = () => {
  const { movies } = useStateMovies();

  return (
    <MoviesContainer>
      { movies && movies.results && movies.results.map((movie, index) => 
        <MovieCard movie={movie} key={index} />)
      }
    </MoviesContainer>
  )
}

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin: 3rem 0;
`;


export default Movies;

//image.tmdb.org/t/p/w94_and_h141_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg 1x, //image.tmdb.org/t/p/w188_and_h282_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg 2x