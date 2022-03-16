import { createSelector } from 'reselect';
import { prepareMovieResults } from '../../utils';

const getMoviesList = (state) => state.movies.list;

export const getMoviesLoading = (state) => state.movies.loading;
export const getMoviesError = (state) => state.movies.loading;
export const getAllMoviesData = (state) => state.movies;
export const selectMoviesList = createSelector(getMoviesList, (list) => prepareMovieResults(list));
