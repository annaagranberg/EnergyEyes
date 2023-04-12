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
        <Box sx={{borderTop: '1px solid #ACD0C0'}}>
            <BottomNavigation
                showLabels
                value={clicked}
                onChange={(_event, newValue) => {
                setClicked(newValue);
                }}>
                <BottomNavigationAction label="Home" component={Link} to="/home"
                    icon={location.pathname === '/home' ? <HomeIcon color='primary'/> : <HomeOutlinedIcon color='primary'/>} />
                <BottomNavigationAction  label="Stat" component={Link} to="/stat"
                    icon={location.pathname === '/stat' ? <LeaderboardIcon color='primary'/> : <LeaderboardOutlinedIcon color='primary'/>} />
                <BottomNavigationAction  label="Profile" component={Link} to="/profile"
                    icon={location.pathname === '/profile' ? <PersonIcon color='primary'/> : <PersonOutlineOutlinedIcon color='primary'/>} />
            </BottomNavigation>
        </Box>
    </ThemeProvider>
    </>
  )
}
