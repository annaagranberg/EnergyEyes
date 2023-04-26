import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Plant from './Plant';
import Money from './Money';
import Curious from './Curious';
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext'

// Calls on different component depending on which type is selected
// export default function PlantBox({ value, type }) {
//     const Component = type === 'plant' ? Plant : Money;
//     const { src, text } = Component(value);

// Takes in two arguments, one number value and a type value

export default function TypeBox({ value, type }) {

  let Component;
  switch (type) {
    case 'Miljö':
      Component = Plant;
      break;
    case 'Sparsam':
      Component = Money;
      break;
    case 'Nyfiken':
      Component = Curious;
      break;
    default:
      return <div />
  }

  const { src, text } = Component(value);

return (
  <Box sx={{height: '400px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
    <Card variant="outlined" sx={{ boxShadow: '0px 0px 2px grey', textAlign: 'left', width: '95%', borderRadius: 2, p: 0.5, height: 350, backgroundColor: '#FEF5F0' }}>
      <CardMedia component="img" height="250" src={src} alt="flower" sx={{ objectFit: 'contain' }} />
      <CardContent sx={{ p: 0.5, mt: 4 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
        {text}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

}
  





