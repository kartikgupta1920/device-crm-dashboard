import { createSlice } from '@reduxjs/toolkit';
const initial = JSON.parse(localStorage.getItem('devices')) || [
    {
    id: 'DEV001',
    type: 'ECG Machine',
    facility: 'Delhi Hospital',
    status: 'Online',
    battery: 82,
    lastService: '2024-06-15',
    contractStatus: 'AMC - Valid till 2025-06-15',
  },
];
const slice = createSlice({
  name: 'devices',
  initialState: { list: initial },
  reducers: {
    addDevice: (s, a) => { s.list.push(a.payload); localStorage.setItem('devices', JSON.stringify(s.list)); },
    updateDevice: (s, a) => {/* similar */},
    deleteDevice: (s, a) => {/* similar */},
  },
});

export const { addDevice, updateDevice, deleteDevice } = slice.actions;
export default slice.reducer;

