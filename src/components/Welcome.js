import React  from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import { CardContent, Button, Typography, CardMedia, Box } from '@mui/material';
import Logo from '../images/Logo5.png'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../contexts/Theme';


export default function Welcome() {

 return (
    <>
    <ThemeProvider theme={theme}>
        <Card sx={{ minWidth: 270, mt: '17vh'}}  elevation={0}>
            <CardContent>

              <CardMedia
                component="img"
                height = '180'
                sx={{ display: "flex", marginLeft: "auto", 
                    marginRight: "auto", maxWidth: 137, mb:4 }}
                src = {Logo}
                alt="Logo"
              />

              <Typography variant='h2' align='center' mb={6} color='#092A23'>
                EnergyEyes
              </Typography>

              
              {/* <Link to="/login" style={{textDecoration:'none', color:'#ACD0C0'}} >
                <Box>
                  
                </Box>
              </Link> */}
              <Box sx={{flexDirection:'column', display:'flex', width: '80%', marginLeft:'auto', marginRight:'auto'}}>
                <Button component={Link} to='/login' variant='contained' sx={{mb:2, borderRadius: 2}}>
                  Logga in
                </Button>
                <Button component={Link} to='/signup' variant='contained' sx={{mb:2, borderRadius: 2}}>
                  Skapa konto
                </Button>
              </Box>

            </CardContent>
        </Card>
    </ThemeProvider>
    </>
  )
}
 