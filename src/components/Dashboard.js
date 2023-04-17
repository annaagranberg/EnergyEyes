import React, {useState} from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { CardContent, Alert, Button, CardHeader, Avatar, ThemeProvider, Typography, Slider, ToggleButtonGroup, ToggleButton } from '@mui/material'
import Card from '@mui/material/Card';
//import { auth } from '../firebase'
import theme from '../contexts/Theme';
import Box from '@mui/material/Box';
import { db } from '../firebase'
import BottomBar from './BottomBar'
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import MoneyIcon from '@mui/icons-material/Money';
import SearchIcon from '@mui/icons-material/Search';
import Topbar from './Topbar';

export default function Dashboard() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [people, setPeople] = useState("")
    const [area, setArea] = useState("")
    const [profil, setProfil] = useState("")
    const [dusch, setDusch] = useState([])
    const [disk, setDisk] = useState("")
    const [kok, setKok] = useState("")
    const [tvatt, setTvatt] = useState("")

    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: '#D9B44A',
            height: 90,
            width: 90,
            fontSize: 35,
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }
    
      const handleProfil = (event, newProfil) => {
        setProfil(newProfil);
    };
    
    const marks = [
    {
        value: 0,
        label: 'Sparsam',
    }, {
        value: 50,
        label: 'Nyfiken',
    }, 
    {
        value: 100,
        label: 'Miljö',
    }]

    // const handleProfil = (event) => {
    //     var s = marks[event.target.value / 50].label
    //     setProfil(s);
    //     updateProfil(s)
    // };
    
    async function handleLogout(){
        setError('')

        try{
            await logout()
            navigate('/login')
        }catch{
            setError('Failed to logout')
        }
    }

    var docRef = db.collection("user_collection").doc(currentUser.uid);

    //Get db information
    docRef.get("name.firstname").then((doc) => {
        if (doc.exists) {
            setFname(doc.get("name.firstname"))
            setLname(doc.get("name.lastname"))
            setPeople(doc.get("antalPersoner"))
            setArea(doc.get("boendeyta"))
            setProfil(doc.get("profiltyp"))
            setDusch(doc.get("duschparametrar"))
            setDisk(doc.get("diskparametrar.antal"))
            setKok(doc.get("kokparametrar.antal"))
            setTvatt(doc.get("tvattparametrar.antal"))
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

  return (
    <>

    <Box sx={{position: 'fixed', top: 0, left: 0, right: 0 }}>
                <Topbar sx={{width:'100%'}}/>
    </Box>

    <ThemeProvider theme={theme}>
    
        <Box component='div' sx={{overflowX:'hidden', overflowY:'scroll'}}>
            <Card sx={{ minWidth: 270 }} elevation={0}>
                <CardContent>
                    {error && <Alert varient = "danger">{error}</Alert> }

                    {/* <strong>Email:</strong> {currentUser.email} <br></br>
                    <strong>ID:</strong> {currentUser.uid} */}

                    {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update profile</Link> */}

                </CardContent>
            </Card>

            <Card sx={{ /*display: 'flex',*/ borderRadius:0}} elevation={0}>
                <Box  sx={{ display: 'flex', flexDirection: 'column', width:'100%', overflowY:'scroll'}}>
                    <CardHeader sx={{ height:'18vh', bgcolor:'#092A23'}}>

                    </CardHeader>

                    <CardContent sx={{ flex: '1 0 auto', padding:0 , mb: 2}}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent:'space-around', width:'90%', ml:'auto', mr:'auto', mt:-5}}>
                            <Avatar {...stringAvatar(fname + " " + lname)} />

                            <Link to='/update-profile' style={{textDecoration:'none'}}>
                                <Button variant='contained' sx={{borderRadius: 2}}>
                                    Ändra
                                </Button>
                            </Link>
                        </Box>
                    </CardContent>
                </Box>
                
                <Box sx={{width:'90%', ml:'auto', mr:'auto' }} display='flex' flexDirection="column" alignItems='center'>
                    <Box display='flex' flexDirection='row' justifyContent='space-between' sx={{width:'95%', mb:2}}>
                        <Card variant='outlined' sx={{border:'3px solid #ACD0C0', textAlign:'center',  borderRadius: 3, width:'30%'}}>
                            <Typography variant='h6' >{fname} {lname}</Typography>
                        </Card>
                        <Card variant='outlined' component='div' sx={{border:'3px solid #ACD0C0', textAlign:'center', borderRadius: 3, width:'30%'}}>
                            <Typography variant='h6'>{area} kvm</Typography>
                        </Card>
                        <Card variant='outlined' sx={{border:'3px solid #ACD0C0', textAlign:'center', borderRadius: 3, width:'30%'}}>
                            <Typography variant='h6'>{people} i bostad</Typography>
                        </Card>
                    </Box>

                    <Box sx={{width:'95%',  border:'3px solid #ACD0C0', borderRadius: 3 }} flexWrap='wrap' flexDirection='row' display='flex' alignItems='center'>
                        <Card  sx={{ textAlign:'left', width:'45%', m:1}} elevation={0}>
                            <CardContent>
                                <Box sx={{mb:2}}>
                                    <Typography variant='h6' fontWeight ='520' >Dusch: {dusch['tid']} min</Typography>
                                    <Typography  variant='h8' >per dusch</Typography>
                                </Box>
                                <Box>
                                    <Typography variant='h6' fontWeight ='520'  >Diskning: {disk}</Typography>
                                    <Typography variant='h8' >i veckan</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                        <Card  sx={{ textAlign:'left', width:'45%', m:1}} elevation={0} >
                            <CardContent>
                                <Box sx={{mb:2}}>
                                    <Typography variant='h6' fontWeight ='520' >Spis: {kok}</Typography>
                                    <Typography variant='h8' >i veckan</Typography>
                                </Box>
                                <Box>
                                    <Typography variant='h6' fontWeight ='520' >Tvättar: {tvatt}</Typography>
                                    <Typography variant='h8' >i månaden</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>

                    <ToggleButtonGroup 
                            value={profil}
                            exclusive
                            onChange={handleProfil}
                            sx={{mt: 3, width:'100%',ml:'auto', mr:'auto', justifyItems:'stretch' }}
                            >
                                <ToggleButton value="Miljö" >
                                    <NaturePeopleIcon/>
                                    Miljö
                                </ToggleButton>
                                <ToggleButton value="Sparsam">
                                    <MoneyIcon/>
                                    Sparsam
                                </ToggleButton>
                                <ToggleButton value="Nyfiken">
                                    <SearchIcon/>
                                    Nyfiken
                                </ToggleButton>
                    </ToggleButtonGroup>
                </Box>

            

                <div className='w-100 text-center mt-2'>
                    <Button variant="contained" onClick={handleLogout} sx={{borderRadius:2, pl:5,pr:5, mt:1, mb:3}}>  
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
