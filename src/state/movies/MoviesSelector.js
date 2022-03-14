import { createSelector } from 'reselect';

const getMoviesList = (state) => state.movies.list;

export const getMoviesLoading = (state) => state.movies.loading;
export const getMoviesError = (state) => state.movies.loading;
export const getAllMoviesData = (state) => state.movies;
export const selectMoviesList = createSelector(getMoviesList, (list) =>
    list.map(({ poster_path, backdrop_path, release_date, ...rest }) => ({
        poster: `https://image.tmdb.org/t/p/w500/${poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
        releaseYear: release_date.split('-')[0],
        ...rest,
    }))
);
