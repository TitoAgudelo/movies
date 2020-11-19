import { createContext, useReducer, useContext } from 'react';
import { types, moviesReducer, initialState } from './state';
import { getMovies, getMovie } from '../../hooks/useMovies';

export const MoviesStateContext = createContext();
export const MoviesSetContext = createContext();

export const useStateMovies = () => useContext(MoviesStateContext);
export const useSetMovies = () => useContext(MoviesSetContext);

const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  const handleSearch = async (filterText) => {
    const movies = await getMovies(filterText);
    dispatch({ type: types.SET_MOVIES, payload: movies });
  };

  const getMovieById = async (id) => {
    const movie = await getMovie(id);
    dispatch({ type: types.SET_CURRENT_MOVIE, payload: movie });
  };

  const addFavorite = (movie) => {
    dispatch({ type: types.ADD_FAVORITE, payload: movie });
  };

  const deleteMovie = (movieId) => {
    dispatch({ type: types.DELETE_FAVORITE, payload: movieId })
  };

  return (
    <MoviesStateContext.Provider value={state}>
      <MoviesSetContext.Provider
        value={{handleSearch, getMovieById, addFavorite, deleteMovie}}>
        {children}
      </MoviesSetContext.Provider>
    </MoviesStateContext.Provider>
  );
};

export default MoviesProvider;
