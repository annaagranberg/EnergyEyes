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
    const { currentUser, updateName, updateArea, updatePeople, setNewUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [area, setArea] = useState('');
    const [people, setPeople] = useState('');
    const [profil, setProfil] = useState('');
    const [dusch, setDusch] = useState([{antal:0, tid:0}]);


    const handleArea = (event) => {
        setArea(event.target.value);
    };
    const handlePeople = (event) => {;
        setPeople(event.target.value);
    };
    const handleProfil = (event, newProfil) => {
        setProfil(newProfil);
    };
    const handleDuschAntal = (event, value) => {
        let index=0
        let newVal=dusch[index]
        newVal["antal"]=value;
        dusch[index]=newVal;
        setDusch([...dusch])
        console.log(dusch)
    };
    const handleDuschTid = (event, value) => {
        let index=0
        let newVal=dusch[index]
        newVal["tid"]=value;
        dusch[index]=newVal;
        setDusch([...dusch])

        console.log(dusch)
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
        <Card sx={{ minWidth: 270, mt: '10vh', ml:1, mr:1, pl: 2, pr: 2}} elevation={0}>
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

                    <FormGroup id="homesettings" sx={{flexDirection:'column', flexWrap:'wrap', width:'100%', justifyContent:'space-between'}}>
                        <FormControl fullWidth sx={{ mb:3 }} variant='standard'>
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
                        <FormControl fullWidth sx={{ mb:3 }} variant='standard'>
                            <InputLabel id="yta">Yta</InputLabel>
                            <Select
                            //labelId="yta"
                            id="yta"
                            value={area}
                            label="Yta"
                            onChange={handleArea}>
                            <MenuItem  value={15}>15-20 kvm</MenuItem>
                            <MenuItem value={20}>20-25 kvm</MenuItem>
                            <MenuItem value={25}>25-30 kvm</MenuItem>
                            <MenuItem value={30}>30-40 kvm</MenuItem>
                            <MenuItem value={40}>40-100 kvm</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            
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

                    <Box>
                        <Stack>
                            <FormLabel required>Antal duschar i veckan:</FormLabel>
                            <Pagination sx={{ml:'auto', mr:'auto', mb:2, alignContent:'space-between'}} size='large' count={10} siblingCount={0} onChange={handleDuschAntal} />
                        </Stack>
                        <Stack>
                            <FormLabel required>Tid i dusch: :</FormLabel>
                            <Pagination sx={{ml:'auto', mr:'auto', mb:2, alignContent:'space-between'}} size='large' count={10} siblingCount={0} onChange={handleDuschTid} />
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
