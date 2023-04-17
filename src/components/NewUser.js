import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { CardContent, FormControl, FormGroup, ThemeProvider, 
    Button, Alert, TextField, InputAdornment, Typography, Select, MenuItem, InputLabel, ToggleButtonGroup, ToggleButton, FormControlLabel, FormLabel, Box, Stack, Pagination } from '@mui/material'
import theme from '../contexts/Theme';
import Card from '@mui/material/Card';
import { Person, Password, Nat } from '@mui/icons-material';
import { db } from '../firebase'
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import MoneyIcon from '@mui/icons-material/Money';
import SearchIcon from '@mui/icons-material/Search';

export default function NewUser() {
    const firstRef = useRef()
    const lastRef = useRef()
    const area = useRef()
    const { currentUser, updateName, updateArea, updatePeople, setNewUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [people, setPeople] = useState('');
    const [profil, setProfil] = useState('');
    const [tvatt, setTvatt] = useState('');
    const [disk, setDisk] = useState('');
    const [kok, setKok] = useState('');
    const [dusch, setDusch] = useState([{antal:0, tid:0}]);

    const handlePeople = (event) => {;
        setPeople(event.target.value);
    };
    const handleProfil = (event, newProfil) => {
        setProfil(newProfil);
    };
    const handleKokAntal = (event, value) => {
        setKok(value)
    };
    const handleDiskAntal = (event, value) => {
        setDisk(value)
        console.log(value)
    };
    const handleTvattAntal = (event, value) => {
        setTvatt(value)
    };

    async function handleSubmit(e){
        e.preventDefault()

        const promises = []
        setLoading(true)
        setError('')

        if(area === '' && people === ''){
            return setError("Area not bra")
        }

        if(typeof firstRef.current.value !== 'string' && typeof lastRef.current.value !== 'string'){
            return setError("Not a name")
        }

        try{
            setError('')
            setLoading(true)
            await setNewUser(firstRef.current.value,lastRef.current.value,area,people,profil, dusch, 1, 1,1);
            navigate('/profile')
        } catch{
            setError("Failed to create an account")
        }
    }

  return (
    <>
    <ThemeProvider theme={theme}>
        <Card sx={{ minWidth: 270, mt: '10vh', ml:1, mr:1, mb:0, pl: 2, pr: 2}} elevation={0}>
            <CardContent>
                <h1 className='text-center mb-4'>Inställningar</h1>
                {error && <Alert sx= {{mb:3}} severity = "error">{error}</Alert> }
                
                <Box component='div' sx={{overflowX:'hidden', overflowY:'scroll', mb:7}}>
                <form onSubmit={handleSubmit}>

                    <FormGroup id="name" sx={{pt:3}}>
                        <FormControl sx={{flexDirection:'column', flexWrap:'wrap', width:'100%', justifyContent:'space-between'}}>
                            <TextField variant="standard" label="Förnamn" type='name' inputRef={firstRef} placeholder='Förnamn' required
                            sx={{ mb:3 }} InputProps={{
                                startAdornment:(
                                    <InputAdornment position='start'>
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}/>
                            <TextField variant="standard" label="Efternamn" type='name' inputRef={lastRef} placeholder= 'Förnamn' required
                            sx={{ mb:3 }} InputProps={{
                                startAdornment:(
                                    <InputAdornment position='start'>
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}/>
                        </FormControl>
                    </FormGroup>

                    <FormGroup id="homesettings" sx={{flexDirection:'row', flexWrap:'wrap', width:'100%', justifyContent:'space-between'}}>
                        <FormControl variant='standard'  sx={{ mb:3, width:'49%', minWidth:'140px' }}>
                            <InputLabel id="antalpersoner">Hushåll</InputLabel>
                            <Select
                            labelId="antalpersoner"
                            id="antalpersoner"
                            value={people}
                            label="Hushåll"
                            onChange={handlePeople}
                            >
                            <MenuItem value={1}>1 person</MenuItem>
                            <MenuItem value={2}>2 personer</MenuItem>
                            <MenuItem value={3}>3 personer</MenuItem>
                            <MenuItem value={4}>4 personer</MenuItem>
                            <MenuItem value={5}>5 personer</MenuItem>
                            <MenuItem value={6}>6 personer</MenuItem>
                            <MenuItem value={7}>övrigt antal</MenuItem>

                            </Select>
                        </FormControl>
                        <FormControl  variant='standard' sx={{ mb:3, maxWidth:'49%', minWidth:'140px' }}>
                            <TextField variant="standard" label="Area" type='number' inputRef={area} placeholder='Area'
                            InputProps={{ inputProps: { min: 10, max: 200 } }} />
                        </FormControl>                  
                    </FormGroup>

                    <FormLabel required>Profiltyp</FormLabel>
                    <ToggleButtonGroup 
                            value={profil}
                            exclusive
                            onChange={handleProfil}
                            fullWidth
                            sx={{mb: 3}}
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

                    <FormLabel>Dusch</FormLabel>
                    <FormGroup id="name" >
                        <FormControl sx={{flexDirection:'row', flexWrap:'wrap', width:'100%', justifyContent:'space-between'}}>
                            <TextField variant="standard" label="Antal" type='number' placeholder='Antal i veckan'
                            InputProps={{ inputProps: { min: 1, max: 15 } }}
                            sx={{ mb:3, maxWidth:'49%', minWidth:'140px' }}/>
                            <TextField variant="standard" label="Tid" type='number' placeholder= 'Tid i dusch'
                            InputProps={{ inputProps: { min: 1, max: 60 } }}
                            sx={{ mb:3, maxWidth:'49%', minWidth:'140px' }}/>
                        </FormControl>
                    </FormGroup>

                    <Box>
                        <Stack>
                            <FormLabel required>Hur ofta i veckan lagar du mat?</FormLabel>
                            <Pagination sx={{ml:'auto', mr:'auto', mb:2, alignContent:'space-between'}} size='large' count={10} siblingCount={0} onChange={handleKokAntal} />
                        </Stack>
                        <Stack>
                            <FormLabel required>Hur ofta i veckan diskar du?</FormLabel>
                            <Pagination sx={{ml:'auto', mr:'auto', mb:2, alignContent:'space-between'}} size='large' count={10} siblingCount={0} onChange={handleDiskAntal} />
                        </Stack>
                        <Stack>
                            <FormLabel required>Hur många gånger i månaden tvättar du?</FormLabel>
                            <Pagination sx={{ml:'auto', mr:'auto', mb:2, alignContent:'space-between'}} size='large' count={15} siblingCount={0} onChange={handleTvattAntal}  />
                        </Stack>
                    </Box>


                    <Button disabled = {loading} variant="contained" type='submit' sx={{width:'100%'}}>Ställ in</Button>
                </form>
                </Box>
            </CardContent>
        </Card>
    </ThemeProvider>
    </>
  )
}
