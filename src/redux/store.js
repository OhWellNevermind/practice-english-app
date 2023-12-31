import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { wordsReducer } from './wordSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  words: wordsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
