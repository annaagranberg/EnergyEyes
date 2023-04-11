import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Plant from './Plant';
import Money from './Money';
import Badges from './Badges';

// Calls on different component depending on which type is selected
// export default function PlantBox({ value, type }) {
//     const Component = type === 'plant' ? Plant : Money;
//     const { src, text } = Component(value);

// Takes in two arguments, one number value and a type value
export default function TypeBox({ value, type }) {
  let Component;
  switch (type) {
    case 'plant':
      Component = Plant;
      break;
    case 'money':
      Component = Money;
      break;
    case 'badges':
      Component = Badges;
      break;
    default:
      Component = Plant;
      break;
  }

  const { src, text } = Component(value);

if(type === "badges") {
    return (
      <Box sx={{height: '300px', width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      </Box>
      );
}

return (
  <Box sx={{height: '300px', width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
    <Card variant="outlined" sx={{ border: '3px solid #ACD0C0', textAlign: 'left', width: '95%', borderRadius: 2, p: 0.5, height: 250 }}>
      <CardMedia component="img" height="150" src={src} alt="flower" sx={{ objectFit: 'contain' }} />
      <CardContent sx={{ p: 0.5 }}>
        <Typography gutterBottom variant="h10" component="div" sx={{ textAlign: 'center', mt: 1 }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

}
  





