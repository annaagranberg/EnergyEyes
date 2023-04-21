
import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {AppliancePie, Pietext} from './AppliancePie';
import {Dialog, DialogTitle, DialogContent,DialogContentText} from "@mui/material";

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
      <Card onClick={handleOpen} color="success" variant='outlined' sx={{  boxShadow: '1px 1px 7px grey', textAlign: 'left', width: '100%', borderRadius: 2, padding: '10px'}}>
            <AppliancePie/>

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
              <AppliancePie/>
              <Pietext/>
              hej hej hej
                </DialogContentText>
            </DialogContent>
      </Dialog>
        
      </Card>
    </Box>
  );
}
