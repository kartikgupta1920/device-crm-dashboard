import { createSlice } from '@reduxjs/toolkit';

const initial = JSON.parse(localStorage.getItem('alerts')) || [];

const slice = createSlice({
  name: 'alerts',
  initialState: { list: initial },
  reducers: {
    addAlert: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem('alerts', JSON.stringify(state.list));
    },
    deleteAlert: (state, action) => {
      state.list = state.list.filter(a => a.id !== action.payload);
      localStorage.setItem('alerts', JSON.stringify(state.list));
    },
  },
});

export const { addAlert, deleteAlert } = slice.actions;
export default slice.reducer;
