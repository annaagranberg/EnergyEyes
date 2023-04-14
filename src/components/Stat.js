import { Box } from '@mui/material'
import React from 'react'
import BottomBar from './BottomBar'
import Topbar from './Topbar'


export default function Stat() {
  return (
    <>

    <Box sx={{position: 'fixed', top: 0, left: 0, right: 0, }}>
        <Topbar sx={{width:'100%'}} />
    </Box>

    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
          <BottomBar sx={{ width: '100%' }} />
    </Box>
    </>
  )
}
