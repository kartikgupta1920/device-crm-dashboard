import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { TextField, MenuItem, Button, Box, Typography } from '@mui/material';

export default function Login() {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('admin');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      alert('Username is required');
      return;
    }
    login(username, role);
    navigate('/');
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box component="form" onSubmit={handleSubmit} sx={{ width: 300, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>Login</Typography>

        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />

        <TextField
          select
          fullWidth
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          margin="normal"
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="technician">Technician</MenuItem>
        </TextField>

        <Button fullWidth type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </Box>
  );
}
