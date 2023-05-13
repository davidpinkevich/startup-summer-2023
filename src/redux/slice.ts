import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_DATA } from '../constants';
import { TInitialState } from '../types';

const initialState: TInitialState = {
  catalogues: [],
  vacancies: [],
  access_token: '',
  token_type: '',
  loadingData: 'start',
};

// export const getData = createAsyncThunk('jobs/getData', async (data: TDataResponse) => {
//   const response = await fetch(`${url}`, {
//     headers: {
//       Authorization: `${data.type} ${data.token}`,
//       'x-secret-key': AUTH_DATA.X_SECRET_KEY,
//       'X-Api-App-Id': AUTH_DATA.CLIENT_SECRET,
//     },
//   });
//   return await response.json();
// });

export const getData = createAsyncThunk('jobs/getData', async (url: string) => {
  const response = await fetch(`${url}`, {
    headers: {
      // Authorization: `${data.type} ${data.token}`,
      'x-secret-key': AUTH_DATA.X_SECRET_KEY,
      'X-Api-App-Id': AUTH_DATA.CLIENT_SECRET,
    },
  });
  return await response.json();
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    getCatalogues: (state, action) => {
      state.catalogues = action.payload;
    },
    getVacancies: (state, action) => {
      state.vacancies = action.payload;
    },
    getToken: (state, action) => {
      state.access_token = action.payload;
    },
    getTokenType: (state, action) => {
      state.token_type = action.payload;
    },
    changeLoading: (state) => {
      state.loadingData = 'start';
    },
    clearResponse: (state) => {
      state.vacancies = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loadingData = 'loading';
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loadingData = 'start';
        state.vacancies = action.payload;
      })
      .addCase(getData.rejected, (state) => {
        state.loadingData = 'error';
      });
  },
});

const { actions, reducer } = jobsSlice;
export default reducer;
export const { getCatalogues, getToken, getTokenType, getVacancies, changeLoading, clearResponse } =
  actions;
