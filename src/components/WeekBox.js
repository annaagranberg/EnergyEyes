
import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import WeekSpendChart from './WeekSpendChart';
import {Dialog, DialogTitle, DialogContent,DialogContentText} from "@mui/material";

// MUI comp that shows the weekly spending graph
export default function WeekBox() {


  const [open, setOpen] = useState(false);
  
  function handleOpen() {
      setOpen(!open);
  }
  
  function handleClose() {
      setOpen(false);
  }

  return (
    <Box sx={{ width: '90%', display: 'flex', mt:1 ,flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Card onClick={handleOpen} variant='outlined' sx={{boxShadow: '1px 1px 7px grey', textAlign: 'left', width: '100%', borderRadius: 2, padding: '10px' }}>
            <WeekSpendChart/>  

            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogContent sx={{backgroundColor:'#ffff', color:'white'}}>
                <DialogContentText id="alert-dialog-description" sx={{backgroundColor:'#ffff', color:'black'}}> 
              hej hej hej
                </DialogContentText>
            </DialogContent>
      </Dialog>
      
            
      </Card>
    </Box>
  );
}
