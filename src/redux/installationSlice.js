import { createSlice } from '@reduxjs/toolkit';

const initial = JSON.parse(localStorage.getItem('installations')) || [];

const slice = createSlice({
  name: 'installations',
  initialState: { list: initial },
  reducers: {
    addInstallation: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem('installations', JSON.stringify(state.list));
    },
    deleteInstallation: (state, action) => {
      state.list = state.list.filter(i => i.id !== action.payload);
      localStorage.setItem('installations', JSON.stringify(state.list));
    },
  },
});

export const { addInstallation, deleteInstallation } = slice.actions;
export default slice.reducer;
