import { Box, Card } from '@mui/material'
import React from 'react'
import BottomBar from './BottomBar'
import Topbar from './Topbar'
import Progressbar from './ProgressBar'
import NewData from './NewData'
import PriceBox from './PriceBox'
import PieBox from './PieBox'
import WeekBox from './WeekBox'
import ElecPriceChart from './ElecPriceChart'

{/* 
        
        <Progressbar spendingAmount={70} total={100} goalAmount={80} timeUnit='dag' />  */}

export default function Stat() {
  return (
    <>
    {/* <ElecPriceChart/> */}
    {/* <NewData/> */}
    <Box sx={{position: 'fixed', top: 0, left: 0, right: 0, }}>
        <Topbar sx={{width:'100%', zIndex:10}} />
    </Box>


    <Box component='div' sx={{overflowX:'hidden', overflowY:'scroll', mb:8, mt:9}}>
      <PriceBox mb={2} />

      <Box sx={{ display: 'flex', mt:2, mb:1, width: '100%', flexDirection:'row', justifyContent: 'space-around', alignItems: 'center', zIndex:0 }} >
        <Box sx={{ display: 'flex', width: '60%', flexDirection:'column', justifyContent: 'space-around', alignItems: 'center', zIndex:0 }}>
          <PieBox/>
          <WeekBox/>
        </Box>

        <Box sx={{ display: 'flex', width: '40%',  flexDirection:'row', justifyContent: 'space-around', alignItems: 'center', zIndex:0 }} >
          <Progressbar spendingAmount={55} total={100} goalAmount={80} timeUnit='dag' />
          <Progressbar spendingAmount={50} total={100} goalAmount={80} timeUnit='vecka' /> 
        </Box>

      </Box>



      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <BottomBar sx={{ width: '100%', zIndex: 10 }} />
      </Box>
    </Box>
    </>
  )
}
