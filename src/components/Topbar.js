import React, {useState} from 'react'
import Button from "@mui/material/Button";
import InfoIcon from '@mui/icons-material/Info';
import { CardMedia, Box, AppBar, Toolbar} from "@mui/material";
import Logo from '../images/Logo5.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Dialog, DialogTitle, DialogContent,DialogContentText} from "@mui/material";
const themes = createTheme({
    palette:{
        primary:{
            main: '#fff',
        }
            
    },
  });

export default function Topbar() {

 
  const [open, setOpen] = useState(false);
  
  function handleOpen() {
      setOpen(!open);
  }

  function handleClose() {
      setOpen(false);
  }

  return (
<ThemeProvider theme={themes}>
<Box sx={{flexGrow:1}}>
<AppBar position="static">
<Toolbar>
  <Box sx={{width: 30, height: 40,}}>
    <CardMedia
      component="img"
      sx={{ width: "100%", height: "100%"}}
      src ={Logo}
      alt="Logga"
    />
  </Box>

  <Box sx={{marginLeft: 'auto'}}>
  <Button onClick={handleOpen} 
            color="success"
            >
               <InfoIcon sx={{color: '#092A23',marginLeft: 'auto', }} size="large"/>
          </Button>
          
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            
            >
            <DialogTitle id="alert-dialog-title"sx={{backgroundColor:'#092A23', color:'white'}}>
                 {"Om Energyeyes"}
            </DialogTitle>
            <DialogContent sx={{backgroundColor:'#092A23', color:'white'}}>
                <DialogContentText id="alert-dialog-description" sx={{backgroundColor:'#092A23', color:'white'}}>
                EnergyEyes är en app för dig som vill se din energiförbrukning i syfte att spara pengar eller i ett miljösyfte.
                Vi är grupp som utvecklat den här appen i vårt kandidatprojekt lalalllalalalalmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                mmmmmmmmmmmmmmmmmmmmmmm mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm.
                </DialogContentText>
            </DialogContent>
      </Dialog>
        
   
 </Box>

</Toolbar>

</AppBar>
</Box>
</ThemeProvider>

  );
};
