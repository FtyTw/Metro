import { useDispatch } from 'react-redux';

import { fetchMovies } from './actions';

export const useFetchMovies = () => {
    const dispatch = useDispatch();

    const fetchMoviesList = () => {
        dispatch(fetchMovies());
    };

    return fetchMoviesList;
};
