import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAlert } from '../redux/alertsSlice';
import { Button, TextField, Box, Typography } from '@mui/material';

export default function PhotoUpload() {
  const [form, setForm] = useState({ deviceId: '', issue: '', photo: null });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFile = e => {
    setForm(prev => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const photoUrl = form.photo ? URL.createObjectURL(form.photo) : null;
    dispatch(addAlert({
      id: Date.now().toString(),
      deviceId: form.deviceId,
      issue: form.issue,
      photoUrl,
      date: new Date().toISOString().slice(0,10)
    }));
    setForm({ deviceId: '', issue: '', photo: null });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>Report Alert / Condition</Typography>
      <TextField
        fullWidth name="deviceId" label="Device ID"
        value={form.deviceId} onChange={handleChange} margin="normal"
      />
      <TextField
        fullWidth name="issue" label="Issue Description"
        value={form.issue} onChange={handleChange} margin="normal"
      />
      <input type="file" accept="image/*" onChange={handleFile} style={{ margin: '16px 0' }} />
      <Button type="submit" variant="contained">Upload Alert</Button>
    </Box>
  );
}
