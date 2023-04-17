import { Box } from '@mui/material'
import React from 'react'
import BottomBar from './BottomBar'
import FactBox from './FactBox'
import TypeBox from './TypeBox'
import PriceBox from'./PriceBox'
import Topbar from './Topbar'

//   <TypeBox value={42} type="plant" />
export default function Home() {
  return (

    <>
       <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
       <Topbar sx={{width: '100%'}}/>
      </Box>
    <FactBox/>
    <PriceBox/>
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
          <BottomBar sx={{ width: '100%' }} />
      </Box></>

  )
}
