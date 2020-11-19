import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useStateMovies, useSetMovies } from '../providers/MoviesProvider/MoviesProvider';

function Movie() {
  const { id } = useParams();
  const { currentMovie } = useStateMovies();
  const { getMovieById, addFavorite } = useSetMovies();
  let history = useHistory();

  const handleBack = () => {
    history.push('/');
  };

  const handleFavorite = () => {
    addFavorite(currentMovie);
    history.push('/favorites')
  };

  useEffect(() => {
    getMovieById(id);
  }, [id])

  return currentMovie && (
    <>
      <Header />
      <Inline>
        <MovieTitle>Movie Detail</MovieTitle>
        <BackText onClick={handleBack}>Back</BackText>
      </Inline>
      <MovieContent>
        <ImageCover>
          <Image src={`https://image.tmdb.org/t/p/w188_and_h282_bestv2/${currentMovie.poster_path}`} />
        </ImageCover>
        <MovieDetail>
          <MovieTitle>{currentMovie.original_title}</MovieTitle>
          <Overview>{currentMovie.overview}</Overview>
          <Inline style={{ alignContent: 'center', justifyContent: 'flex-start', marginTop: '1rem' }}>
            <Subtitle style={{ marginRight: '.5rem' }}>Rate:</Subtitle>
            <Vote>{currentMovie.vote_average}</Vote>
          </Inline>
          <Inline style={{ alignContent: 'center', justifyContent: 'flex-start', marginTop: '1rem' }}>
            <Subtitle style={{ marginRight: '.5rem' }}>Release Date:</Subtitle>
            <Overview>{currentMovie.release_date}</Overview>
          </Inline>
          <Vote style={{ marginTop: '1rem' }} onClick={handleFavorite}>+ Favorite</Vote>
        </MovieDetail>
      </MovieContent>
    </>
  );
}

export default Movie;

const MovieContent = styled.div`
  display: flex;
`;

const MovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  max-width: 700px;
`;

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

const Subtitle = styled.h4`
  color: ${({ theme: { colors } }) => colors.white };
  font-family: 'Macho Medium';
  margin: 0;
`;

const Overview = styled.p`
  color: ${({ theme: { colors } }) => colors.white };
  font-family: 'Macho Regular';
  font-size: 12px;
  margin: 0;
`;

const Vote = styled.span`
  background-color: ${({ theme: { colors } }) => colors.gradient };
  border-radius: 8px;
  color: ${({ theme: { colors } }) => colors.white };
  cursor: pointer;
  font-family: 'Macho SemiBold';
  font-size: 16px;
  margin: 0;
  padding: 5px 10px;
  width: fit-content;
`;

const ImageCover = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  width: auto;
`;