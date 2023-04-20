import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ElecPriceChart from './ElecPriceChart';

// MUI comp that shows the ElecPriceChart graph
export default function PriceBox() {
  return (

    <Box sx={{width:'100%'}} flexDirection='column' display='flex' justifyContent='space-evenly' alignItems='center'>
    <Card variant='outlined' sx={{boxShadow: '1px 1px 7px grey', textAlign:'left', width:'95%', borderRadius:2}}>
        <Typography variant='h5' ml='1'>
              Elpris
         </Typography>
         <ElecPriceChart />
    </Card>
    </Box>
  );
}

