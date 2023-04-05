import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Plant from './Plant';


export default function ActionAreaCard() {
  const value = 4;
  const { src, text } = Plant(value);

  return (
    <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Card variant="outlined" sx={{ border: '3px solid #ACD0C0', textAlign: 'left', width: '95%', borderRadius: 2 }}>
        <CardMedia component="img" height="flex" src={src} alt="flower" />
        <CardContent>
          <Typography gutterBottom variant="h10" component="div" sx={{ textAlign: "center" }}>
            {text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
