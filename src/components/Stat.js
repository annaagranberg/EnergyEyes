import { Box } from '@mui/material'
import React from 'react'
import BottomBar from './BottomBar'
import Topbar from './Topbar'
import Progressbar from './ProgressBar'



export default function Stat() {
  return (
    <>

    <Box sx={{position: 'fixed', top: 0, left: 0, right: 0, }}>
        <Topbar sx={{width:'100%'}} />
    </Box>

     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Progressbar spendingAmount={90} total={100} goalAmount={80} />
      </div>

    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
          <BottomBar sx={{ width: '100%' }} />
    </Box>
    </>
  )
}
