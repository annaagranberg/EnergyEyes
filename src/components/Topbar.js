import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import { CardMedia, Box, AppBar, Toolbar, ListItemText} from "@mui/material";
import Logo from '../images/Logo5.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "../contexts/Theme";
  
export default function Topbar() {

 
  const [open, setOpen] = React.useState(false);
  
  function handleOpen() {
      setOpen(!open);
  }

  function handleClose() {
      setOpen(false);
  }
  const [isActive, setIsActive] = React.useState(false);

  function aktiv(){
      setIsActive(!isActive);
  }

  return (
  <ThemeProvider theme={theme}>
    <Box sx={{flexGrow:1}}>
      <AppBar position="static" color='background'>
        <Toolbar>
          <Box sx={{width: 30, height: 40,}}>
              <CardMedia
                component="img"
                sx={{ width: "100&", height: "100%"}}
                src ={Logo}
                alt="Logga"
              />
          </Box>

          <Box sx={{marginLeft: 'auto'}}>
            <Button onClick={handleOpen} color="success">
                <MenuIcon sx={{color: 'black',marginLeft: 'auto'}}/>
            </Button>
                    
            <Drawer anchor={"top"} open={open} onClose={handleClose}>
                        
              <MenuItem sx={{alignContent:'center' ,backgroundColor:'#092A23', p:2}}>
                
                <ListItemText style={{textAlign:'center', color:'white'}}>
                   Info
                </ListItemText> 
                                      
              </MenuItem>
                                
              <MenuItem sx={{alignContent:'center',backgroundColor:'#092A23', p:2}}>
                  <ListItemText style={{textAlign:'center', color: 'white'}}>
                  Om oss
                  </ListItemText>
              </MenuItem>
              <MenuItem sx={{alignContent:'center',backgroundColor:'#092A23', p:2}}>
                  <ListItemText style={{textAlign:'center', color: 'white'}}>
                  Hejhej
                  </ListItemText>
              </MenuItem>
            </Drawer>
         </Box>
        </Toolbar>
      </AppBar>
    </Box>
  </ThemeProvider>
  );
};
