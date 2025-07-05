import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addService } from '../redux/serviceSlice';
import { Button, TextField, MenuItem, Box, Typography } from '@mui/material';

export default function ServiceForm() {
  const [form, setForm] = useState({
    deviceId: '',
    engineer: '',
    type: 'Preventive',
    notes: '',
    date: ''
  });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addService({
      id: Date.now().toString(),
      ...form
    }));
    setForm({ deviceId: '', engineer: '', type: 'Preventive', notes: '', date: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>Log Service Visit</Typography>
      <TextField
        fullWidth name="deviceId" label="Device ID"
        value={form.deviceId} onChange={handleChange} margin="normal"
      />
      <TextField
        fullWidth name="engineer" label="Engineer Name"
        value={form.engineer} onChange={handleChange} margin="normal"
      />
      <TextField
        select fullWidth name="type" label="Visit Type"
        value={form.type} onChange={handleChange} margin="normal"
      >
        <MenuItem value="Preventive">Preventive</MenuItem>
        <MenuItem value="Breakdown">Breakdown</MenuItem>
      </TextField>
      <TextField
        fullWidth name="notes" label="Notes"
        multiline rows={2}
        value={form.notes} onChange={handleChange} margin="normal"
      />
      <TextField
        fullWidth name="date" type="date" label="Date"
        InputLabelProps={{ shrink: true }}
        value={form.date} onChange={handleChange} margin="normal"
      />
      <Button type="submit" variant="contained">Submit Service</Button>
    </Box>
  );
}
