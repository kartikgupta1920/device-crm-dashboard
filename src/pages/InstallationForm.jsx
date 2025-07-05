import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDevice } from '../redux/devicesSlice';
import { Button, TextField } from '@mui/material';

export default function InstallationForm() {
  const [form, setForm] = useState({ id: '', type: '', status: 'Online' });
  const dispatch = useDispatch();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addDevice({ ...form }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField name="id" label="Device ID" onChange={handleChange} /><br/>
      <TextField name="type" label="Device Type" onChange={handleChange} /><br/>
      <Button type="submit" variant="contained">Add Device</Button>
    </form>
  );
}
