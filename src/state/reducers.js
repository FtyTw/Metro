import { combineReducers } from 'redux';
import { MovieApi, moviesSlice } from './movies';

const combinedReducer = combineReducers({
    movies: moviesSlice.reducer,
    [MovieApi.reducerPath]: MovieApi.reducer,
});

export const middleWares = (getDefaultMiddleware) => {
    const middleWares = [...getDefaultMiddleware(), MovieApi.middleware];
    return middleWares;
};

export const rootReducer = (state, action) => combinedReducer(state, action);
