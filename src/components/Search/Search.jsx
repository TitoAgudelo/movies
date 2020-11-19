import React, { useState } from "react";
import styled from "styled-components";

import { useStateMovies, useSetMovies } from '../../providers/MoviesProvider/MoviesProvider';

const Search = () => {
  const { movies } = useStateMovies();
  const { handleSearch } = useSetMovies();
  const [search, setSearch] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSearch(search);
    }
  };

  return (
    <SearchContainer>
      <SearchTitle>Are you looking for some movies. Let's Get stared!</SearchTitle>
      <SerachLegend>Type and press enter to search something</SerachLegend>
      <SearchField
        type="text"
        placeholder="Search by Title"
        onKeyDown={handleKey}
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
`;

const SearchTitle = styled.h4`
  color: ${({ theme: { colors } }) => colors.white };
  font-family: 'Macho Regular';
  font-size: 16px;
  margin-bottom: 0;
`;

const SerachLegend = styled.p`
  color: ${({ theme: { colors } }) => colors.white };
  font-family: 'Macho Regular';
  font-size: 10px;
`;

const SearchField = styled.input`
  border-radius: 5px;
  color: ${({ theme: { colors } }) => colors.dark };
  font-family: 'Macho Regular';
  font-size: 16px;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

export default Search;
