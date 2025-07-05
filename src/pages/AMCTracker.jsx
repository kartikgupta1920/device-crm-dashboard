import React from 'react';
import { useSelector } from 'react-redux';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Chip, Box, Typography
} from '@mui/material';

export default function AMCTracker() {
  const devices = useSelector(s => s.devices.list);

  const getStatus = expiry => {
    const days = (new Date(expiry) - new Date())/(1000*60*60*24);
    if (days < 0) return { label: 'Expired', color: 'error' };
    if (days < 30) return { label: 'Expiring Soon', color: 'warning' };
    return { label: 'Active', color: 'success' };
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>AMC/CMC Tracker</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Device ID</TableCell>
            <TableCell>Expiry Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {devices.map(d => {
            const stat = getStatus(d.contractExpiry);
            return (
              <TableRow key={d.id}>
                <TableCell>{d.id}</TableCell>
                <TableCell>{d.contractExpiry}</TableCell>
                <TableCell><Chip label={stat.label} color={stat.color} /></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
}
