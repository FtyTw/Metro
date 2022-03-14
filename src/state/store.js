import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, middleWares } from './reducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => middleWares(getDefaultMiddleware),
});

export default store;
