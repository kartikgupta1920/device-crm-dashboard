import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@mui/material';

export default function LogoutButton() {
  const { logout } = useAuth();
  return <Button onClick={logout}>Logout</Button>;
}
