import { createApi } from '@reduxjs/toolkit/query/react';
import { movieInstance, movieListParams } from '../../http';

const axiosBaseQuery = async ({ url, method, data }) => {
    try {
        const result = await movieInstance({ url, method, data });
        return { data: result.data };
    } catch (axiosError) {
        let err = axiosError;
        return {
            error: { status: err.response?.status, data: err.response?.data },
        };
    }
};

export const MovieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: axiosBaseQuery,
    endpoints: (builder) => ({
        getMoviesList: builder.query({
            query: () => ({
                url: 'discover/movie',
                method: 'get',
                params: movieListParams,
            }),
        }),
        getMoviesById: builder.query({
            query: (id) => ({
                url: `movie/${id}`,
                method: 'get',
            }),
        }),
        getSimilarMoviesById: builder.query({
            query: (id) => ({
                url: `movie/${id}/similar`,
                method: 'get',
            }),
        }),
    }),
});

export const { useGetMoviesListQuery, useGetMoviesByIdQuery, useGetSimilarMoviesByIdQuery } =
  MovieApi;
