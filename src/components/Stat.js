import { Box } from '@mui/material'
import React from 'react'
import BottomBar from './BottomBar'
import Graph2 from './Graph2';
import Graph3 from './Graph3';
import ElectricityPricesGraph from './ElectricityPricesGraph';
import StapelGraf from './StapelGraf';
import Graph4 from './Graph4';


export default function Stat() {
  return (
    <>
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
          <Graph2 />
          <Graph3 />
          <ElectricityPricesGraph />
          <StapelGraf />
          <BottomBar sx={{ width: '100%' }} />
      </Box></>
  )
}