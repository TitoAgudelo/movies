import React from 'react'

import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Movies from '../components/Movies/Movies';


function Home() {
  return (
    <>
      <Header />
      <Search />
      <Movies />
    </>
  );
}

export default Home;
