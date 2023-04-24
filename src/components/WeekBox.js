
import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import WeekSpendChart from './WeekSpendChart';
<<<<<<< HEAD
import {Dialog, Typography, DialogContent,DialogContentText} from "@mui/material";
=======
import {Dialog, DialogTitle, DialogContent,DialogContentText} from "@mui/material";
>>>>>>> 2822285ab22d23fb68504dee4fbc3f5cce274f7b

// MUI comp that shows the weekly spending graph
export default function WeekBox() {

<<<<<<< HEAD
=======

>>>>>>> 2822285ab22d23fb68504dee4fbc3f5cce274f7b
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
<<<<<<< HEAD
        <Typography variant='h10' ml={1} mt={1} >
              Veckoförbrukning
         </Typography>
            <WeekSpendChart/>  

         <Dialog
=======
            <WeekSpendChart/>  

            <Dialog
>>>>>>> 2822285ab22d23fb68504dee4fbc3f5cce274f7b
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogContent sx={{backgroundColor:'#ffff', color:'white'}}>
                <DialogContentText id="alert-dialog-description" sx={{backgroundColor:'#ffff', color:'black'}}> 
<<<<<<< HEAD
                  <Typography variant='h5' sx={{textAlign: 'center'}} >
                    Veckoförbrukning
                  </Typography>
                <WeekSpendChart />  
                  Detta stapeldiagram visar din dagliga förbrukning under veckan. Om stolpens färg ändrar färg från grön till gul så betyder det att du använt mer energi än det daggliga mål du angett.
                </DialogContentText>
            </DialogContent>
          </Dialog>
      
=======
              hej hej hej
                </DialogContentText>
            </DialogContent>
      </Dialog>
      
            
>>>>>>> 2822285ab22d23fb68504dee4fbc3f5cce274f7b
      </Card>
    </Box>
  );
}
