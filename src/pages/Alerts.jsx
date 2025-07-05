import React from 'react';
import { useSelector } from 'react-redux';
import PhotoUpload from '../components/PhotoUpload';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Box, Typography
} from '@mui/material';

export default function Alerts() {
  const alerts = useSelector(state => state.alerts.list);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Alerts & Photo Logs</Typography>
      <PhotoUpload />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Device ID</TableCell>
            <TableCell>Issue</TableCell>
            <TableCell>Photo</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alerts.map(a => (
            <TableRow key={a.id}>
              <TableCell>{a.deviceId}</TableCell>
              <TableCell>{a.issue}</TableCell>
              <TableCell>
                {a.photoUrl && <img src={a.photoUrl} alt="" width={60} />}
              </TableCell>
              <TableCell>{a.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
