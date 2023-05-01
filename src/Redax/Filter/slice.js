import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './statusFilter';

const initialStateFilter = {
  status: statusFilters.all,
};

const sliceFilter = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});


export const { setFilter } = sliceFilter.actions
export const filterReducer = sliceFilter.reducer