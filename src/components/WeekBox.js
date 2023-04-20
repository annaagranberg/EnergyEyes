import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import WeekSpendChart from './WeekSpendChart';

// MUI comp that shows the weekly spending graph
export default function WeekBox() {
  return (
    <Box sx={{ width: '90%', display: 'flex', mt:1 ,flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Card variant='outlined' sx={{boxShadow: '1px 1px 7px grey', textAlign: 'left', width: '100%', borderRadius: 2, padding: '10px' }}>
            <WeekSpendChart/>  
      </Card>
    </Box>
  );
}
