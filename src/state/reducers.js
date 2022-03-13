import {combineReducers} from 'redux';
import {MovieApi} from './movies/MovieApi';

const combinedReducer = combineReducers({
    [MovieApi.reducerPath]: MovieApi.reducer,
});

export const rootReducer = (state, action) => combinedReducer(state, action);
