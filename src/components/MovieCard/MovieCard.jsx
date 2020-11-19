import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, favorite, removeMovie }) => {
  const handleRemove = () => {
    removeMovie(movie.id);
  };

  return (
    <Container>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
        <ImageCover>
          <Image src={`https://image.tmdb.org/t/p/w188_and_h282_bestv2/${movie.poster_path}`} />
        </ImageCover>
        <Title>{movie.title}</Title>
        <Date>Release date: {movie.release_date}</Date>
      </Link>
      {favorite && <Button onClick={handleRemove}>- Remove</Button>}
    </Container>
  )
}

const Button = styled.span`
  background-color: ${({ theme: { colors } }) => colors.gradient };
  border-radius: 8px;
  color: ${({ theme: { colors } }) => colors.white };
  cursor: pointer;
  font-family: 'Macho SemiBold';
  font-size: 16px;
  padding: 5px 10px;
  margin-top: 10px;
  width: 77px;
`;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100px;
  min-height: 450px;
  width: 100%;
`;

const ImageCover = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.p`
  color: ${({ theme: { colors } }) => colors.white };
  font-family: 'Macho SemiBold';
  font-weight: bold;
  font-size: 12px;
  margin: 0;
  padding: 1rem 0 0 5px;
  text-decoration: none;
`;

const Date = styled.p`
  color: ${({ theme: { colors } }) => colors.white };
  font-family: 'Macho Regular';
  font-size: 12px;
  margin: 0;
  margin-bottom: 1rem;
  padding: 5px;
  text-transform: none;
`;


export default MovieCard;
