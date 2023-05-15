import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_DATA } from '../../constants';
import { TInitialState } from '../../types';

const initialState: TInitialState = {
  catalogues: [],
  vacancies: [],
  description: '',
  access_token: '',
  token_type: '',
  loadingData: 'start',
  currentPagVac: 1,
  currentPagFavor: 1,
  arrayPagMain: [],
  arrayPagFavor: [],
  totalVacancies: 0,
  valueSearch: '',
};

// export const getData = createAsyncThunk('jobs/getData', async (data: TDataResponse) => {
//   const response = await fetch(`${url}`, {
//     headers: {
//       Authorization: `Bearer ${data.token}`,
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
    changePagVacancies: (state, action) => {
      state.currentPagVac = action.payload;
    },
    savePaginationMain: (state, action) => {
      state.arrayPagMain = action.payload;
    },
    changePagFavor: (state, action) => {
      state.currentPagFavor = action.payload;
    },
    savePaginationFavor: (state, action) => {
      state.arrayPagFavor = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loadingData = 'loading';
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loadingData = 'start';
        if (action.payload.objects) {
          state.vacancies = action.payload.objects;
        } else {
          state.description = action.payload.vacancyRichText;
        }
        state.totalVacancies = action.payload.total;
      })
      .addCase(getData.rejected, (state) => {
        state.loadingData = 'error';
      });
  },
});

const { actions, reducer } = jobsSlice;
export default reducer;
export const {
  getCatalogues,
  getToken,
  getTokenType,
  getVacancies,
  changeLoading,
  clearResponse,
  changePagVacancies,
  savePaginationMain,
  changePagFavor,
  savePaginationFavor,
} = actions;
