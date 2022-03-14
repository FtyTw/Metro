import { useSelector } from 'react-redux';
import { getAllMoviesData, selectMoviesList } from '../state/selectors';

export const useFetchAllMoviesData = () => {
    const allMoviesData = useSelector(getAllMoviesData);
    return allMoviesData;
};

export const useSelectMoviesListPrepared = () => {
    const moviesPrepared = useSelector(selectMoviesList);
    return moviesPrepared;
};
