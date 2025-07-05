import React from 'react';
import { useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';
import { Button } from '@mui/material';

export default function ExportCSV() {
  const devices = useSelector((state) => state.devices.list);

  const headers = [
    { label: 'Device ID', key: 'id' },
    { label: 'Type', key: 'type' },
    { label: 'Facility', key: 'facility' },
    { label: 'Status', key: 'status' },
    { label: 'Battery %', key: 'battery' },
    { label: 'Last Service Date', key: 'lastService' },
    { label: 'AMC/CMC Status', key: 'contractStatus' },
  ];

  return (
    <CSVLink data={devices} headers={headers} filename="device-inventory.csv" style={{ textDecoration: 'none' }}>
      <Button variant="outlined" color="primary" sx={{ my: 2 }}>
        Export to CSV
      </Button>
    </CSVLink>
  );
}
