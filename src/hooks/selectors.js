import { useSelector } from 'react-redux';

import { selectMoviePrettier } from '../state/selectors';

export const useMovieList = () => {
    const movies = useSelector(selectMoviePrettier);
    return movies;
};
