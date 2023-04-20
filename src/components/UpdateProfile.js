import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { CardContent, FormControl, FormGroup, ThemeProvider, 
    Button, Alert, TextField, InputAdornment, Typography, Select, MenuItem, InputLabel, FormLabel, Stack, Box, Pagination } from '@mui/material'
import theme from '../contexts/Theme';
import Card from '@mui/material/Card';
import { Person, Password } from '@mui/icons-material';
import { db } from '../firebase'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const firstRef = useRef()
    const lastRef = useRef()
    const { currentUser, updateEmail, updatePassword, updateName, updateArea, updatePeople } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    
    const [area, setArea] = useState('');
    const [people, setPeople] = useState('');
    const [profil, setProfil] = useState("")
    const [duschTid, setDuschTid] = useState('')
    const [duschAntal, setDuschAntal] = useState('')
    const [disk, setDisk] = useState(0)
    const [kok, setKok] = useState(0)
    const [tvatt, setTvatt] = useState(0)


    var docRef = db.collection("user_collection").doc(currentUser.uid);
    //Get db information
    docRef.get("name.firstname").then((doc) => {
        if (doc.exists) {
            firstRef.current = doc.get("name.firstname")
            lastRef.current = doc.get("name.lastname")
            setPeople(doc.get("antalPersoner"))
            setArea(doc.get("boendeyta"))
            setProfil(doc.get("profiltyp"))
            setDuschTid(doc.get("duschparametrar.tid"))
            setDuschAntal(doc.get("duschparametrar.antal"))
            setDisk(doc.get("diskparametrar.antal"))
            setKok(doc.get("kokparametrar.antal"))
            setTvatt(doc.get("tvattparametrar.antal"))

        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });


    const handleArea = (event) => {
        setArea(event.target.value);
    };
    const handlePeople = (event) => {;
        setPeople(event.target.value);
    };
    const handleKokAntal = (event, value) => {
        setKok(value)
    };
    const handleDiskAntal = (event, value) => {
        setDisk(value)
        console.log(disk)
    };
    const handleTvattAntal = (event, value) => {
        setTvatt(value)
    };

    function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError('')

        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }

        if(area !== '' && people !== ''){
            promises.push(updateArea(area))
            promises.push(updatePeople(people))
        }

        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }
        if(typeof firstRef.current.value === 'string' && typeof lastRef.current.value === 'string'){
            promises.push(updateName(firstRef.current.value, lastRef.current.value ))
        }

        Promise.all(promises).then(() => {
            navigate('/profile')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })
    }

  return (
    <>
    <ThemeProvider theme={theme}>
        <Button component={Link} to="/profile" sx={{padding:0, mt:2}}>
          <ArrowBackIosIcon/>
        </Button>
        <Card sx={{ minWidth: 270, mt: '3vh', ml:1, mr:1}} elevation={0}>
            <CardContent>
                <h2 className='text-center mb-4'>Uppdatera profil</h2>
                {error && <Alert sx= {{mb:3}} severity = "error">{error}</Alert> }
                
                <form onSubmit={handleSubmit}>
                    <FormGroup id="email">
                        <FormControl>
                            <TextField variant="standard" label="email" type='email' inputRef={emailRef} required defaultValue={currentUser.email}
                            sx={{mb:3}} InputProps={{
                                startAdornment:(
                                    <InputAdornment position='start'>
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}/>
                        </FormControl>
                    </FormGroup>

                    <FormGroup id="password">
                        <FormControl/>
                        <TextField variant='standard' label='lösenord' type='password' inputRef={passwordRef} placeholder='********'
                        sx={{mb:3}} InputProps={{
                            startAdornment:(
                                <InputAdornment position='start'>
                                    <Password />
                                </InputAdornment>
                            ),
                        }}/>
                    </FormGroup>

                    <FormGroup id="password-confirm">
                        <TextField variant="standard" label="bekräfta lösenord" type='password' inputRef={passwordConfirmRef} placeholder='********'
                            sx={{mb:3}} InputProps={{
                                startAdornment:(
                                    <InputAdornment position='start'>
                                        <Password />
                                    </InputAdornment>
                                ),
                            }}/>
                    </FormGroup>

                    <FormGroup id="name" >
                        <FormControl sx={{flexDirection:'row', flexWrap:'wrap', width:'100%', justifyContent:'space-between'}}>
                            <TextField variant="standard" label="Förnamn" type='name' inputRef={firstRef} placeholder={firstRef.current}
                            sx={{ mb:3, maxWidth:'49%', minWidth:'140px' }} InputProps={{
                                startAdornment:(
                                    <InputAdornment position='start'>
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}/>
                            <TextField variant="standard" label="Efternamn" type='name' inputRef={lastRef} placeholder={lastRef.current}
                            sx={{ mb:3, maxWidth:'49%', minWidth:'140px' }} InputProps={{
                                startAdornment:(
                                    <InputAdornment position='start'>
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}/>
                        </FormControl>
                    </FormGroup>

                    <FormGroup id="homesettings" sx={{flexDirection:'row', flexWrap:'wrap', width:'100%', justifyContent:'space-between'}}>
                        <FormControl fullWidth sx={{ mb:3, maxWidth:'49%', minWidth:'140px' }} variant='standard'>
                            <InputLabel id="antalpersoner">Hushåll</InputLabel>
                            <Select
                            labelId="antalpersoner"
                            id="antalpersoner"
                            value={people}
                            label="Hushåll"
                            onChange={handlePeople}>
                            <MenuItem value={1}>1 person</MenuItem>
                            <MenuItem value={2}>2 personer</MenuItem>
                            <MenuItem value={3}>3 personer</MenuItem>
                            <MenuItem value={4}>4 personer</MenuItem>
                            <MenuItem value={5}>övrigt antal</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl  variant='standard' sx={{ mb:3, width:'49%', maxWidth:'50%', minWidth:'140px' }}>
                            <TextField variant="standard" label='Area' value={area} type='number' placeholder={area}
                            InputProps={{ inputProps: { min: 10, max: 200 } }} />
                        </FormControl>
                    </FormGroup>

                    <Box>
                        <Stack>
                            <FormLabel sx={{mb:1}} >Uppdatera matlagning:</FormLabel>
                            <Pagination sx={{ml:'auto', mr:'auto', mb:3, alignContent:'space-between'}} page={kok} count={10} siblingCount={0} onChange={handleKokAntal} />
                        </Stack>
                        <Stack>
                            <FormLabel sx={{mb:1}} >Uppdatera diskning:</FormLabel>
                            <Pagination sx={{ml:'auto', mr:'auto', mb:3, alignContent:'space-between'}} page={disk} count={10} siblingCount={0} onChange={handleDiskAntal} />
                        </Stack>
                        <Stack>
                            <FormLabel sx={{mb:1}} >Uppdatera tvättning:</FormLabel>
                            <Pagination sx={{ml:'auto', mr:'auto', mb:3, alignContent:'space-between'}} page={tvatt} count={15} siblingCount={0} onChange={handleTvattAntal}/>
                        </Stack>
                    </Box>

                    <Button disabled = {loading} variant="contained" type='submit' sx={{width:'100%'}}>Updatera</Button>
                </form>
                <Button variant="contained" color='secondary' sx={{width:'100%', mt:2}}>Radera konto</Button>
            </CardContent>
        </Card>
    </ThemeProvider>
    </>
  )
}
