import { createSlice } from '@reduxjs/toolkit';
import { TInitialStateFilters } from '../../types';

const initialState: TInitialStateFilters = {
  searchValue: '',
  category: '',
  fromSalary: '',
  toSalary: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.searchValue = action.payload;
    },
    changeСategory: (state, action) => {
      state.category = action.payload;
    },
    changeFrom: (state, action) => {
      state.fromSalary = action.payload;
    },
    changeTo: (state, action) => {
      state.toSalary = action.payload;
    },
    clearFilters: (state) => {
      state.category = '';
      state.fromSalary = '';
      state.toSalary = '';
    },
  },
});

const { actions, reducer } = filtersSlice;
export default reducer;
export const { changeSearch, changeСategory, changeFrom, changeTo, clearFilters } = actions;
