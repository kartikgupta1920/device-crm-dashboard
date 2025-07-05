import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInstallation } from '../redux/installationSlice';
import { Button, TextField, Checkbox, FormControlLabel, Box, Typography } from '@mui/material';

export default function InstallationForm() {
  const [form, setForm] = useState({
    deviceId: '',
    facility: '',
    checklistDone: false,
    trainingNotes: '',
    photo: null,
  });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePhoto = e => {
    setForm(prev => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const photoUrl = form.photo ? URL.createObjectURL(form.photo) : null;
    dispatch(addInstallation({
      id: Date.now().toString(),
      deviceId: form.deviceId,
      facility: form.facility,
      checklistDone: form.checklistDone,
      trainingNotes: form.trainingNotes,
      photoUrl,
      date: new Date().toISOString().slice(0,10)
    }));
    setForm({ deviceId: '', facility: '', checklistDone: false, trainingNotes: '', photo: null });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>Log New Installation</Typography>
      <TextField
        fullWidth name="deviceId" label="Device ID"
        value={form.deviceId} onChange={handleChange} margin="normal"
      />
      <TextField
        fullWidth name="facility" label="Facility"
        value={form.facility} onChange={handleChange} margin="normal"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="checklistDone"
            checked={form.checklistDone}
            onChange={handleChange}
          />
        }
        label="Checklist Completed"
      />
      <TextField
        fullWidth
        name="trainingNotes"
        label="Training Notes"
        multiline
        rows={2}
        value={form.trainingNotes}
        onChange={handleChange}
        margin="normal"
      />
      <input type="file" accept="image/*" onChange={handlePhoto} style={{ margin: '16px 0' }} />
      <Button type="submit" variant="contained">Submit Installation</Button>
    </Box>
  );
}
