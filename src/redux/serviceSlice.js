import { createSlice } from '@reduxjs/toolkit';

const initial = JSON.parse(localStorage.getItem('services')) || [];

const slice = createSlice({
  name: 'services',
  initialState: { list: initial },
  reducers: {
    addService: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem('services', JSON.stringify(state.list));
    },
    deleteService: (state, action) => {
      state.list = state.list.filter(s => s.id !== action.payload);
      localStorage.setItem('services', JSON.stringify(state.list));
    },
  },
});

export const { addService, deleteService } = slice.actions;
export default slice.reducer;
