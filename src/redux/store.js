import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './slices/weatherSlice';

export const store = configureStore({
  reducer: { weather: reducers },
});
