import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ElecPriceChart from './ElecPriceChart';
import {Dialog, DialogContent,DialogContentText} from "@mui/material";


// MUI comp that shows the ElecPriceChart graph
export default function PriceBox() {

  const [open, setOpen] = useState(false);
  
  function handleOpen() {
      setOpen(!open);
  }
  
  function handleClose() {
      setOpen(false);
  }
  return (

    <Box sx={{width:'100%'}} flexDirection='column' display='flex' justifyContent='space-evenly' alignItems='center'>
    <Card onClick={handleOpen} variant='outlined' sx={{boxShadow: '1px 1px 7px grey', textAlign:'left', width:'95%', borderRadius:2, marginTop: 1}}>
        <Typography variant='h5' ml={1.5} mt={1.5} >
              Elpris
         </Typography>
         <ElecPriceChart />

         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogContent sx={{backgroundColor:'#ffff', color:'white'}}>
              
                <DialogContentText id="alert-dialog-description" sx={{backgroundColor:'#ffff', color:'black'}}> 
                  <Typography variant='h5' sx={{textAlign: 'center'}} >
                    Elpris
                  </Typography>
                  <ElecPriceChart />
                    Denna graf visar elpriset under dygnet och uppdateras varje dag. Så du enkelt kan se när det är billigare att använda el.
                </DialogContentText>
            </DialogContent>
      </Dialog>
      
    </Card>
    </Box>
  );
}

