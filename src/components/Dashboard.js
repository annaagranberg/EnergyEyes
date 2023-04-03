import React, {useState} from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { CardContent, Alert, Button, CardHeader, Avatar, ThemeProvider, Typography } from '@mui/material'
import Card from '@mui/material/Card';
//import { auth } from '../firebase'
import theme from '../contexts/Theme';
import Box from '@mui/material/Box';
import { db } from '../firebase'
import BottomBar from './BottomBar'

export default function Dashboard() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout(){
        setError('')

        try{
            await logout()
            navigate('/login')
        }catch{
            setError('Failed to logout')
        }
    }


  return (
    <>
    <ThemeProvider theme={theme}>
        <Box component='div' sx={{overflowX:'hidden', overflowY:'scroll', mb:7}}>
            <Card sx={{ minWidth: 270, mt: '5vh' }} elevation={0}>
                <CardContent>
                    {error && <Alert varient = "danger">{error}</Alert> }

                    {/* <strong>Email:</strong> {currentUser.email} <br></br>
                    <strong>ID:</strong> {currentUser.uid} */}

                    {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update profile</Link> */}

                </CardContent>
            </Card>

            <Card sx={{ /*display: 'flex',*/ borderRadius:0}} elevation={0}>
                <Box  sx={{ display: 'flex', flexDirection: 'column', width:'100%', overflowY:'scroll'}}>
                    <CardHeader sx={{ height:'15vh', bgcolor:'#092A23'}}>

                    </CardHeader>

                    <CardContent sx={{ flex: '1 0 auto', padding:0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent:'space-around', width:'100%', mt:-4}}>
                            <Avatar sx={{height: 80, width: 80, zIndex:3, bgcolor:'#D9B44A'}}/>

                            <Typography component='div' variant='h6' sx={{display: { xs: 'none', sm: 'block' }}}>
                                {currentUser.email}
                            </Typography >
                            <Link to='/update-profile' style={{textDecoration:'none'}}>
                                <Button variant='contained' sx={{borderRadius: 2}}>
                                    Ändra
                                </Button>
                            </Link>
                        </Box>
                    </CardContent>
                </Box>
                
                <Box sx={{width:'100%'}} display='flex' flexDirection="column" alignItems='center'>
                    <Box display='flex' flexDirection='row' justifyContent='space-between' sx={{width:'95%', mb:1}}>
                        <Card variant='outlined' sx={{border:'3px solid #ACD0C0', textAlign:'center', borderRadius:2, width:'30%'}}>
                            va
                        </Card>
                        <Card variant='outlined' sx={{border:'3px solid #ACD0C0', textAlign:'center', borderRadius:2, width:'30%'}}>
                            va
                        </Card>
                        <Card variant='outlined' sx={{border:'3px solid #ACD0C0', textAlign:'center', borderRadius:2, width:'30%'}}>
                            va
                        </Card>
                    </Box>
                    <Box sx={{width:'100%'}} flexDirection='column' display='flex' justifyContent='space-evenly' alignItems='center'>
                        <Card variant='outlined' sx={{border:'3px solid #ACD0C0', textAlign:'left', width:'95%', borderRadius:2}}>
                            <CardContent>
                                <Typography variant='h5'>
                                    Hej
                                </Typography>
                                <Typography>
                                    Hej
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>

            

                <div className='w-100 text-center mt-2'>
                    <Button variant="contained" onClick={handleLogout} sx={{borderRadius:2, pl:5,pr:5, mt:1, mb:1}}>  
                        Logga ut
                    </Button>
                    
                </div>
                
        </Card>
    </Box>
    <Box sx={{position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                <BottomBar sx={{width:'100%'}}/>
    </Box>

    </ThemeProvider>
    </>
  )
}
