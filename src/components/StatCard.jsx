import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function StatCard({ title, value }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary">{title}</Typography>
        <Typography variant="h5">{value}</Typography>
      </CardContent>
    </Card>
  );
}
