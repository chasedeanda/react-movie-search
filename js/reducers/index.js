import { combineReducers } from 'redux';
import moviesReducer from './movies.js';
import mostPopularReducer from './most-popular.js';

const reducers = combineReducers({
  movies: moviesReducer,
  mostPopular: mostPopularReducer
});

export default reducers;