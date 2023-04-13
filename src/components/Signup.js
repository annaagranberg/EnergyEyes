import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../images/Logo5.png'
import Card from '@mui/material/Card';
import { CardContent, Button, TextField, Alert, Typography, CardMedia, FormHelperText } from '@mui/material';
import { FormGroup, FormControl, InputAdornment} from '@mui/material';
import { Person, Password } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../contexts/Theme';


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    //const user = firebase.auth().currentUser;
    

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
            
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/newuser')
        } catch{
            setError("Failed to create an account")
        }
        setLoading(false)
    }

  return (
    <>
    <ThemeProvider theme={theme}>
        <Button component={Link} to="/" sx={{padding:0, mt:2}}>
            <ArrowBackIosIcon/>
        </Button>


        <Card sx={{ minWidth: 270, mt: '6vh'}}  elevation={0}>
            <CardContent>

            <CardMedia
                component="img"
                height = '180'
                sx={{ display: "flex", marginLeft: "auto", 
                    marginRight: "auto", maxWidth: 137, mb:4 }}
                src = {Logo}
                alt="Logo"
            />
                <h2 className='text-center mb-4'>Skapa konto</h2>
                {error && <Alert sx={{mb:3}} severity="error">{error}</Alert> }

                <form onSubmit={handleSubmit}>

                    <FormGroup id="email">
                        <FormControl>
                            <TextField variant='standard' type='email' label='email' inputRef={emailRef} sx={{mb:3}}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <Person/>
                                    </InputAdornment>
                                ),
                            }}
                            required/>
                        </FormControl>
                    </FormGroup>

                    <FormGroup id="password">
                        <FormControl>
                            <TextField variant='standard' type='password' label='password' inputRef={passwordRef} sx={{mb:3}} 
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <Password/>
                                    </InputAdornment>
                                ),
                            }}
                            required/>
                            </FormControl>
                    </FormGroup>

                    <FormGroup id="password-confirm">
                        <FormControl>
                            <TextField variant='standard' type='password' label='confirm password' inputRef={passwordConfirmRef}  
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <Password/>
                                    </InputAdornment>
                                ),
                            }}
                            required/>
                            <FormHelperText sx={{mb:3}}>*lösenord måste bestå av minst 6 tecken</FormHelperText>
                            </FormControl>
                    </FormGroup>

                    <Button disabled = {loading} variant="contained" type='submit' sx={{width:'100%'}}>Skapa konto</Button>
                </form>


            </CardContent>
        </Card>
        <Typography sx={{textAlign:'center',width:'100vw' ,left:0, bottom: 10, position:'absolute'}}>
            Har du ett konto redan? <Link to="/login" style={{textDecoration:'none', color:'#ACD0C0'}}> Logga in</Link>
        </Typography>
    </ThemeProvider>
    </>
  )
}
