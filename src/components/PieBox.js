import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AppliancePie from './AppliancePie';

// Box for the pie chart
export default function PieBox() {
  return (
    <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Card variant='outlined' sx={{ border: '3px solid #ACD0C0', textAlign: 'left', width: '95%', borderRadius: 2 }}>
        <CardContent> 
            <AppliancePie/>
        </CardContent>
      </Card>
    </Box>
  );
}
