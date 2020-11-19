export const types = {
  FILTER_BY_SEARCH: 'FILTER_BY_SEARCH',
  SET_MOVIES: 'SET_MOVIES',
  SET_CURRENT_MOVIE: 'SET_CURRENT_MOVIE',
  ADD_FAVORITE: 'ADD_FAVORITE',
  DELETE_FAVORITE: 'DELETE_FAVORITE'
};

export const initialState = {
  currentMovie: {},
  movies: [],
  originalMovies: [],
  favoriteMovies: []
};

export const moviesReducer = (state, action) => {
  return action.type === types.SET_MOVIES
    ? { ...state, movies: action.payload, originalMovies: action.payload }
    : action.type === types.SET_CURRENT_MOVIE
    ? { ...state, currentMovie: Object.assign({}, action.payload) }
    : action.type === types.ADD_FAVORITE
    ? { ...state, favoriteMovies: [ ...(state.favoriteMovies.filter(movie => movie.id !== action.payload.id)), action.payload ] }
    : action.type === types.DELETE_FAVORITE
    ? { ...state, favoriteMovies: state.favoriteMovies.filter(movie => movie.id !== action.payload) }
    : state;
};
