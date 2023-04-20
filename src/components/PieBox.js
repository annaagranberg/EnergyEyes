import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import AppliancePie from './AppliancePie';

// Box for the pie chart
export default function PieBox() {
  return (
    <Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Card variant='outlined' sx={{  boxShadow: '1px 1px 7px grey', textAlign: 'left', width: '100%', borderRadius: 2, padding: '10px'}}>
            <AppliancePie/>
      </Card>
    </Box>
  );
}
