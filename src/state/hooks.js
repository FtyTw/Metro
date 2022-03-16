import { useSelector } from 'react-redux';
import { getAllMoviesData, selectMoviesList } from '../state/selectors';
import {
    useGetMoviesListQuery,
    useGetMoviesByIdQuery,
    useGetSimilarMoviesByIdQuery,
} from '../state/movies';

const useFetchAllMoviesData = () => {
    const allMoviesData = useSelector(getAllMoviesData);
    return allMoviesData;
};

const useSelectMoviesListPrepared = () => {
    const moviesPrepared = useSelector(selectMoviesList);
    return moviesPrepared;
};

export {
    useFetchAllMoviesData,
    useSelectMoviesListPrepared,
    useGetMoviesListQuery,
    useGetMoviesByIdQuery,
    useGetSimilarMoviesByIdQuery,
};
