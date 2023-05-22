import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_DATA } from '../../constants';
import { TInitialStateJobs } from '../../types';

const initialState: TInitialStateJobs = {
  catalogues: [],
  vacancies: [],
  favorites: [],
  description: [],
  loadingData: 'start',
  currentPagVac: 1,
  currentPagFavor: 1,
  arrayPagMain: [],
  arrayPagFavor: [],
  totalVacancies: 0,
  search: '',
  categoryType: '',
  salaryFrom: '',
  salaryTo: '',
};

export const getData = createAsyncThunk('jobs/getData', async (url: string) => {
  const tokenLS = localStorage.getItem('token');
  console.log('getData: ', tokenLS);
  const response = await fetch(`${url}`, {
    headers: {
      Authorization: `Bearer ${tokenLS}`,
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
    subSearch: (state, action) => {
      state.search = action.payload;
    },
    subCategory: (state, action) => {
      state.categoryType = action.payload;
    },
    subSalaryFrom: (state, action) => {
      state.salaryFrom = action.payload;
    },
    subSalaryTo: (state, action) => {
      state.salaryTo = action.payload;
    },
    getCatalogues: (state, action) => {
      state.catalogues = action.payload;
    },
    getVacancies: (state, action) => {
      state.vacancies = action.payload;
    },
    changeLoading: (state) => {
      state.loadingData = 'start';
    },
    clearResponse: (state) => {
      state.vacancies = [];
    },
    clearDescription: (state) => {
      state.description = [];
    },
    changePagVacancies: (state, action) => {
      state.currentPagVac = action.payload;
    },
    savePaginationMain: (state, action) => {
      state.arrayPagMain = action.payload;
    },
    clearCurrentMainPages: (state, action) => {
      state.currentPagVac = action.payload;
    },
    changePagFavor: (state, action) => {
      state.currentPagFavor = action.payload;
    },
    savePaginationFavor: (state, action) => {
      state.arrayPagFavor = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
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
          state.totalVacancies = action.payload.total;
        } else {
          state.description = [action.payload];
          state.totalVacancies = 0;
        }
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
  getVacancies,
  changeLoading,
  clearResponse,
  changePagVacancies,
  savePaginationMain,
  changePagFavor,
  savePaginationFavor,
  subSearch,
  subCategory,
  subSalaryFrom,
  subSalaryTo,
  clearCurrentMainPages,
  setFavorites,
  clearDescription,
} = actions;
