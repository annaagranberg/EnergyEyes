import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import BottomBar from './BottomBar'
import FactBox from './FactBox'
import TypeBox from './TypeBox'
import PriceBox from'./PriceBox'
import Topbar from './Topbar'
import theme from '../contexts/Theme'


//   <TypeBox value={42} type="plant" />
export default function Home() {
  return (

    <>
    <ThemeProvider theme={theme}>
      <Box sx={{position: 'fixed', top: 0, left: 0, right: 0, }}>
        <Topbar sx={{width:'100%'}} />
      </Box>
      <Box sx={{overflowX:'hidden', overflowY:'scroll',  mt: '10vh' }}>
          <FactBox/>
          <PriceBox/>
      </Box>
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <BottomBar sx={{ width: '100%' }} />
      </Box>
      
    </ThemeProvider>
    </>
  )
}
