import React from 'react';
import { useSelector } from 'react-redux';
import {
  Table, TableHead, TableRow, TableCell, TableBody,
  Chip, IconButton, Menu, MenuItem
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function DeviceTable() {
  const devices = useSelector(s => s.devices.list);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuDeviceId, setMenuDeviceId] = React.useState(null);

  const handleMenu = (e, id) => {
    setAnchorEl(e.currentTarget);
    setMenuDeviceId(id);
  };
  const handleClose = () => setAnchorEl(null);

  const getStatusColor = status => {
    if (status === 'Online') return 'success';
    if (status === 'Offline') return 'error';
    return 'warning';
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Device ID</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Facility</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {devices.map(d => (
          <TableRow key={d.id}>
            <TableCell>{d.id}</TableCell>
            <TableCell>{d.type}</TableCell>
            <TableCell>{d.facility}</TableCell>
            <TableCell><Chip label={d.status} color={getStatusColor(d.status)} /></TableCell>
            <TableCell>
              <IconButton onClick={e => handleMenu(e, d.id)}>
                <MoreVertIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl) && menuDeviceId === d.id} onClose={handleClose}>
                <MenuItem onClick={handleClose}>View</MenuItem>
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
              </Menu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
