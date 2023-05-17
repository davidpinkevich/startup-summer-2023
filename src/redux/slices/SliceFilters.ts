import { createSlice } from '@reduxjs/toolkit';
import { TInitialStateFilters } from '../../types';

const initialState: TInitialStateFilters = {
  searchValue: '',
  category: '',
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
  },
});

const { actions, reducer } = filtersSlice;
export default reducer;
export const { changeSearch, changeСategory } = actions;
