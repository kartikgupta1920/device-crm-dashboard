import React from 'react';
import { useSelector } from 'react-redux';
import ServiceForm from '../components/ServiceForm';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Box, Typography
} from '@mui/material';

export default function ServiceLogs() {
  const services = useSelector(state => state.services.list);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Service Visit Logs</Typography>
      <ServiceForm />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Device ID</TableCell>
            <TableCell>Engineer</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Notes</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map(s => (
            <TableRow key={s.id}>
              <TableCell>{s.deviceId}</TableCell>
              <TableCell>{s.engineer}</TableCell>
              <TableCell>{s.type}</TableCell>
              <TableCell>{s.notes}</TableCell>
              <TableCell>{s.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
