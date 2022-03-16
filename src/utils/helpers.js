export const prepareMovieResults = (arr) =>
    arr.map(({ poster_path, backdrop_path, release_date, ...rest }) => ({
        poster: `https://image.tmdb.org/t/p/w500/${poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
        releaseYear: release_date.split('-')[0],
        ...rest,
    }));

//TODO as about is it really necessary to use original picture instead of w500
//looks like it loads longer
