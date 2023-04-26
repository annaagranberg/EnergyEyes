
import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {AppliancePie, Pietext} from './AppliancePie';
import {Dialog, Typography, DialogContent,DialogContentText} from "@mui/material";

// Box for the pie chart
export default function PieBox() {

  const [open, setOpen] = useState(false);
  
  function handleOpen() {
      setOpen(!open);
  }

  function handleClose() {
      setOpen(false);
  }

  return (
    <Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Card onClick={handleOpen} color="success" variant='outlined' sx={{ boxShadow: '0px 0px 2px grey', textAlign: 'left', width: '100%', borderRadius: 2, padding: '5px'}}>
      <Typography variant='h10' ml={1.5} mt={2} >
              Uppdelning 
         </Typography>
            <AppliancePie/>
            <Pietext/>

      <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            {/* <DialogTitle id="alert-dialog-title"sx={{backgroundColor:'#ffff', color:'black'}}>
                 {"Om Energyeyes"}
            </DialogTitle> */}
            <DialogContent sx={{backgroundColor:'#ffff', color:'white'}}>
                <DialogContentText id="alert-dialog-description" sx={{backgroundColor:'#ffff', color:'black'}}> 
                <Typography variant='h6' sx={{textAlign: 'center'}}>
                    Uppdelning av elförbrukning
                </Typography>
              <AppliancePie/>
                 <Pietext/>
                  Detta cirkeldiagram visar uppdelning av din energiförbrukning mellan olika syslor.
                </DialogContentText>
            </DialogContent>
      </Dialog>
        
      </Card>
    </Box>
  );
}


