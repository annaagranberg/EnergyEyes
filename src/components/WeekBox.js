import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import WeekSpendChart from './WeekSpendChart';

// MUI comp that shows the weekly spending graph
export default function WeekBox() {
  return (
    <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Card variant='outlined' sx={{ border: '3px solid #ACD0C0', textAlign: 'left', width: '95%', borderRadius: 2 }}>
        <CardContent>
            <WeekSpendChart/>
        </CardContent>
      </Card>
    </Box>
  );
}
