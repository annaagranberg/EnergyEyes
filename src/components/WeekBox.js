
import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import WeekSpendChart from './WeekSpendChart';
import {Dialog, Typography, DialogContent,DialogContentText} from "@mui/material";

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
      <Card onClick={handleOpen} variant='outlined' sx={{boxShadow: '0px 0px 2px grey', textAlign: 'left', width: '100%', borderRadius: 2, padding: '10px' }}>
        <Typography variant='h10' ml={1} mt={1} >
              Veckoförbrukning
         </Typography>
            <WeekSpendChart/>  

         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogContent sx={{backgroundColor:'#ffff', color:'white'}}>
                <DialogContentText id="alert-dialog-description" sx={{backgroundColor:'#ffff', color:'black'}}> 
                  <Typography variant='h5' sx={{textAlign: 'center'}} >
                    Veckoförbrukning
                  </Typography>
                <WeekSpendChart />  
                  Detta stapeldiagram visar din dagliga förbrukning under veckan. Om stolpens färg ändrar färg från grön till gul så betyder det att du använt mer energi än det daggliga mål du angett.
                </DialogContentText>
            </DialogContent>
          </Dialog>
      
      </Card>
    </Box>
  );
}
