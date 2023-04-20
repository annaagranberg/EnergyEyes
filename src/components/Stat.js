import { Box } from '@mui/material'
import React from 'react'
import BottomBar from './BottomBar'
import Topbar from './Topbar'
import Progressbar from './ProgressBar'
import NewData from './NewData'
import PriceBox from './PriceBox'
import PieBox from './PieBox'
import WeekBox from './WeekBox'

//<Progressbar spendingAmount={70} total={100} goalAmount={80} timeUnit='dag' />
//<Progressbar spendingAmount={50} total={100} goalAmount={80} timeUnit='vecka' /> 
 

export default function Stat() {
  return (
    <>
    <ElecPriceChart/>
    <NewData/>
    <Box sx={{position: 'fixed', top: 0, left: 0, right: 0, }}>
        <Topbar sx={{width:'100%'}} />
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 80px)', }}>
        <PriceBox/> 
        {/* <PieBox/>
        <WeekBox/>
        <Progressbar spendingAmount={70} total={100} goalAmount={80} timeUnit='dag' />  */}
      </Box>

    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
          <BottomBar sx={{ width: '100%' }} />
    </Box>
    </>
  )
}
