import { configureStore } from '@reduxjs/toolkit';
import jobs from '../slices/sliceJobs';
import filters from '../slices/SliceFilters';

const store = configureStore({
  reducer: { jobs, filters },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
