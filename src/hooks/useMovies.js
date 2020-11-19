/**
 * Get Movies by query text
 * @param {*} query 
 */
export const getMovies = async (query) => {
  const apiKey = '13b0dba287fb7376b988e3b352d339d2';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
  const options = Object.assign({method: 'GET'})
  const request = new Request(url, options);
  
  try {
    const response = await fetch(request);
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
    return err;
  }
};

export const getMovie = async (id) => {
  const apiKey = '13b0dba287fb7376b988e3b352d339d2';
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const options = Object.assign({method: 'GET'})
  const request = new Request(url, options);
  
  try {
    const response = await fetch(request);
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
    return err;
  }
};
