import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Price from './Price';

export default function FactBox() {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Card variant='outlined' sx={{ border: '3px solid #ACD0C0', textAlign: 'left', width: '95%', borderRadius: 2 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Electricity Prices
          </Typography>
          <Price />
        </CardContent>
      </Card>
    </Box>
  );
}
