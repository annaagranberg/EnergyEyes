
import Box from '@mui/material/Box';
import {ThemeProvider} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CardMedia from '@mui/material/CardMedia';
import Logo5 from "../images/Logo5.png";
import React, {useState} from 'react'
import theme from '../contexts/Theme';
import { createTheme } from '@mui/material/styles';

const themes = createTheme({
    palette:{
        primary:{
            main: '#fff',
        }
            
    },
  });
export default function Topbar() {
     const [state, setState] = useState({
      top: false,
    });
   
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <ThemeProvider>
          <Box
            sx={{ width: anchor === 'top'}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <List>
              {['Om energi', 'om oss', 'hejhej'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton href='/profile'>
                    <ListItemText primary={text} style={{textAlign:'center'}} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
      </ThemeProvider>
    );

   
  return (
    <ThemeProvider  theme={themes}>
        <Box sx={{flexGrow:1, backgroundColor:'white'}}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{width: 30, height: 40,}}>
            <CardMedia
              component="img"
              sx={{ width: "100&", height: "100%"}}
              src ={Logo5}
              alt="Logga"
            />
          </Box>

          <Box sx={{marginLeft: 25}}>
              {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)} >
                  <MenuIcon sx={{color: '#092A23',}}/>
                  </Button>
                  <ThemeProvider theme={theme}>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                    
                  </Drawer>
                  </ThemeProvider>
                </React.Fragment>
              ))}
           
         </Box>
            
        </Toolbar>
        
      </AppBar>
    </Box>
    </ThemeProvider>
  )
};
