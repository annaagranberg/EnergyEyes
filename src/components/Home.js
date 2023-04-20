import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import BottomBar from './BottomBar'
import FactBox from './FactBox'
import TypeBox from './TypeBox'
import PriceBox from'./PriceBox'
import Topbar from './Topbar'
import theme from '../contexts/Theme'
import { Link, useNavigate } from 'react-router-dom'
import {Button} from '@mui/material'


//   <TypeBox value={42} type="plant" />
export default function Home() {
  return (

    <>
    <ThemeProvider theme={theme}>
      <Box sx={{position: 'fixed', top: 0, left: 0, right: 0, }}>
        <Topbar sx={{width:'100%'}} />
      </Box>

     

      <Box sx={{overflowX:'hidden', overflowY:'scroll',  mt: '10vh' }}>
          <TypeBox value={5} type="curious" />

            <Box sx={{flexDirection:'column', display:'flex', width: '95%', marginLeft:'auto', marginRight:'auto'}}>  
              <Button component={Link} to='/update-profile' variant='contained' sx={{mb:2, borderRadius: 2}}>
                  Ändra Vanor
              </Button>
            </Box>

          <FactBox/> 
      </Box>

      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <BottomBar sx={{ width: '100%' }} />
      </Box>
      
    </ThemeProvider>
    </>
  )

  
}
