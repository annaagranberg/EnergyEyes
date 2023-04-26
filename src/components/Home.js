import { Box, ThemeProvider } from '@mui/material'
import React, {useEffect, useState} from 'react'
import BottomBar from './BottomBar'
import FactBox from './FactBox'
import TypeBox from './TypeBox'
import PriceBox from'./PriceBox'
import Topbar from './Topbar'
import theme from '../contexts/Theme'
import { Link } from 'react-router-dom'
import {Button} from '@mui/material'
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext'

//   <TypeBox value={42} type="plant" />
export default function Home() {
  const [profil, setProfil] = useState()
  const { currentUser } = useAuth()

  useEffect(() => {
    const docRef = db.collection("user_collection").doc(currentUser.uid);
    docRef.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        setProfil(data.profiltyp)

      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }, [currentUser.uid]);

  return (

    <>
    <ThemeProvider theme={theme}>
      <Box sx={{position: 'fixed', top: 0, left: 0, right: 0,zIndex:'10001 !important' }}>
        <Topbar sx={{width:'100%'}} />
      </Box>

      <Box sx={{overflowX:'hidden', overflowY:'scroll',  mt: '7vh' }}>
          <TypeBox value={5} type={profil} />

            <Box sx={{flexDirection:'column', display:'flex', width: '95%', marginLeft:'auto', marginRight:'auto'}}>  
              <Button component={Link} to='/update-profile' variant='contained' sx={{mb:3, borderRadius: 2}}>
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
