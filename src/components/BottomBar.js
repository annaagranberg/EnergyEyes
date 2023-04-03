import React, { useState } from 'react'
import { Box, BottomNavigation, BottomNavigationAction, ThemeProvider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import theme from '../contexts/Theme';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function BottomBar() {
    const [clicked, setClicked] = useState(false)
    const location = useLocation();

  return (
    <>
    <ThemeProvider theme={theme}>
        <Box>
            <BottomNavigation
                showLabels
                value={clicked}
                onChange={(_event, newValue) => {
                setClicked(newValue);
                }}>
                <BottomNavigationAction sx={{":hover":{color:'red'}}} label="Home" component={Link} to="/home"
                    icon={location.pathname === '/home' ? <HomeIcon  style={{":hover":{color:'red'}}}  /> : <HomeOutlinedIcon sx={{":hover":{color:'red'}}}/>} />
                <BottomNavigationAction sx={{":hover":{color:'red'}}} label="Stat" component={Link} to="/stat"
                    icon={location.pathname === '/stat' ? <LeaderboardIcon  sx={{":hover":{color:'red'}}} /> : <LeaderboardOutlinedIcon sx={{":hover":{color:'red'}}}  />} />
                <BottomNavigationAction sx={{":hover":{color:'red'}}} label="Profile" component={Link} to="/profile"
                    icon={location.pathname === '/profile' ? <PersonIcon style={{":hover":{color:'red'}}}  /> : <PersonOutlineOutlinedIcon sx={{":hover":{color:'red'}}} />} />
            </BottomNavigation>
        </Box>
    </ThemeProvider>
    </>
  )
}
