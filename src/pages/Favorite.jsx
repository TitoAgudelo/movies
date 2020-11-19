import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header/Header';
import MovieCard from '../components/MovieCard/MovieCard';
import { useStateMovies, useSetMovies } from '../providers/MoviesProvider/MoviesProvider';

function Favorite() {
  const { favoriteMovies } = useStateMovies();
  const { deleteMovie } = useSetMovies();
  let history = useHistory();

  const handleBack = () => {
    history.push('/');
  };

  const handleRemove = (movieId) => {
    deleteMovie(movieId);
    history.push('/favorites');
  };

  return (
    <>
      <Header />
      <Inline>
        <MovieTitle>Favorite Movies</MovieTitle>
        <BackText onClick={handleBack}>Back</BackText>
      </Inline>
      <Favorites>
      { (favoriteMovies && favoriteMovies.length) && favoriteMovies.map((favorite, index) => 
        <MovieCard movie={favorite} key={index} favorite="true" removeMovie={handleRemove} />
      )}
      </Favorites>
    </>
  );
}

export default Favorite;

const Inline = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const BackText = styled.p`
  background-color: ${({ theme: { colors } }) => colors.gradient };
  border-radius: 8px;
  color: ${({ theme: { colors } }) => colors.white };
  cursor: pointer;
  font-family: 'Macho SemiBold';
  font-size: 16px;
  padding: 5px 10px;
`;

const MovieTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.white };
  font-family: 'Macho SemiBold';
`;

const Favorites = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;