import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMoviesList } from '../../http';

export const fetchMovies = createAsyncThunk('movies/getMovies', async () => {
    try {
        const {
            data: { results },
        } = await getMoviesList();
        return results;
    } catch (err) {
        console.log('error', err);
    }
});

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: { list: [], loading: true, error: false },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.list = [];
            state.loading = false;
            state.error = false;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
            state.error = false;
        });
        builder.addCase(fetchMovies.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    },
});
