import React from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, InputBase, CssBaseline, Grid, Button } from '@mui/material';
import { Menu, Search, Dashboard, Build, History, Assignment } from '@mui/icons-material';
import StatCard from './StatCard';
import ExportCSV from './ExportCSV';
import DeviceTable from './DeviceTable';
import styles from '../styles/DashboardLayout.module.scss';

const drawerWidth = 240;

export default function DashboardLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" sx={{ mr: 2 }}><Menu /></IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>DeviceCRM+</Typography>
          <Box className={styles.search}><Search /><InputBase placeholder="Search by Device ID, Facility…" /></Box>
          <IconButton color="inherit"><Assignment /></IconButton>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" className={styles.drawer} PaperProps={{ className: styles.drawerPaper }}>
        <Toolbar />
        <List>
          {[
            { text: 'Dashboard', icon: <Dashboard /> },
            { text: 'Installations', icon: <Build /> },
            { text: 'Service Logs', icon: <History /> },
            { text: 'Contracts', icon: <Assignment /> },
          ].map(({ text, icon }) => (
            <ListItem button key={text}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}><StatCard title="Total Devices" value="150" /></Grid>
          <Grid item xs={12} md={4}><StatCard title="Contracts Expiring" value="4" /></Grid>
          <Grid item xs={12} md={4}><StatCard title="Open Tickets" value="8" /></Grid>
        </Grid>

        <Box className={styles.actions}>
          <Button variant="contained" color="primary">+ Log New Installation</Button>
          <ExportCSV />
        </Box>

        <DeviceTable />
      </Box>
    </Box>
  );
}
