import axios from 'axios'

import {
    BASE_URL as baseURL,
    API_KEY as api_key,
    LANG as language,
} from '../utils/constants'

export const movieInstance = axios.create({
    baseURL,
    params: {api_key, language},
})

export const movieListParams = {
    sort_by: 'popularity.desc',
    include_adult: false,
    include_video: false,
    page: 1,
}

export const getMoviesList = () =>
    movieInstance({
        method: 'get',
        url: 'discover/movie',
        params: movieListParams,
    })

export const getMovieById = id =>
    movieInstance({
        method: 'get',
        url: `movie/${id}`,
    })

export const getSimilarMovieById = id =>
    movieInstance({
        method: 'get',
        url: `/discover/movie/${id}`,
    })
