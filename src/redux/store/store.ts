import { configureStore } from '@reduxjs/toolkit';
import jobs from '../slices/sliceJobs';

const store = configureStore({
  reducer: { jobs },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
