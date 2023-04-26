import { Box, Card } from '@mui/material'
import React from 'react'
import BottomBar from './BottomBar'
import Topbar from './Topbar'
import Progressbar from './ProgressBar'
import PriceBox from './PriceBox'
import PieBox from './PieBox'
import WeekBox from './WeekBox'



export default function Stat() {
  return (
    <>
    {/* <ElecPriceChart/> */}
    {/* <NewData/> */}
    <Box sx={{position: 'fixed', top: 0, left: 0, right: 0, zIndex:'10001 !important' }}>
        <Topbar sx={{width:'100%'}} />
    </Box>


    <Box component='div' sx={{overflowX:'hidden', overflowY:'scroll', mb:8, mt:8}}>
      <PriceBox mb={2}/>

      <Box sx={{ display: 'flex', mt:2, mb:2, width: '100%', flexDirection:'row', justifyContent: 'space-around', alignItems: 'center', zIndex:0, height: '100%' }} >
        <Box sx={{ display: 'flex', width: '60%', flexDirection:'column', justifyContent: 'space-around', alignItems: 'center', zIndex:0, flex: 1}}>
         
           <PieBox sx={{ height: 'flex' , mb: 2}}/>
            <WeekBox sx={{ height: 'flex' }}/>
      
        </Box>

        <Box sx={{ display: 'flex', width: '40%',  flexDirection:'row', justifyContent: 'space-around', alignItems: 'center', zIndex:0 }} >
          <Progressbar spendingAmount={85} total={100} goalAmount={80} timeUnit='dag' />
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

<Box sx={{ display: 'flex', mt:2, mb:1, width: '100%', flexDirection:'row', justifyContent: 'space-around', alignItems: 'center', zIndex:0 }} >
<Box sx={{ display: 'flex', width: '60%', flexDirection:'column', justifyContent: 'space-around', alignItems: 'center', zIndex:0 }}>
  <PieBox/>
  <WeekBox/>
</Box>
</Box>