import { Box } from '@mui/material'
import React from 'react'
import BottomBar from './BottomBar'
import FactBox from './FactBox';

export default function Home() {
  return (
    <><div>Home</div><Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <FactBox/>
          <BottomBar sx={{ width: '100%' }} />
      </Box></>
  )
}
