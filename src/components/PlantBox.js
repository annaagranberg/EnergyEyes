import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Plant from './Plant';

export default function PlantBox({ value }) {
    const { src, text } = Plant(value);

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

