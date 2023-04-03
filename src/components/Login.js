import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Card from '@mui/material/Card';
import { CardContent, Button, TextField, Alert, Typography, CardMedia } from '@mui/material';
import { FormGroup, FormControl, InputAdornment} from '@mui/material';
import { Person, Password } from '@mui/icons-material';
import Logo from '../images/Logo5.png'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../contexts/Theme';


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/profile')
        } catch{
            setError("Failed to log in")
        }
        setLoading(false)
    }

  return (
    <>
    <ThemeProvider theme={theme}>
        <Card sx={{ minWidth: 270, mt: '8vh'}}  elevation={0}>
            <CardContent>

              <CardMedia
                component="img"
                height = '180'
                sx={{ display: "flex", marginLeft: "auto", 
                    marginRight: "auto", maxWidth: 137, mb:4 }}
                src = {Logo}
                alt="Logo"
              />

                <h2 className='text-center mb-3'>Logga in</h2>
                {error && <Alert sx= {{mb:3}} severity="error">{error} </Alert> }

                <form onSubmit={handleSubmit}>

                    <FormGroup id="email">
                        <FormControl>
                            <TextField variant="standard" type='email' label="email" inputRef={emailRef} sx={{mb: 3}} 
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Person />
                                  </InputAdornment>
                                ),
                              }}
                            required/>
                        </FormControl>
                    </FormGroup>

                    <FormGroup id="password">
                        <FormControl>
                        <TextField variant="standard" type='password' label='password' inputRef={passwordRef} sx={{mb: 3, borderradius: '50%'}}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Password />
                              </InputAdornment>
                            ),
                          }}
                         required/>
                        </FormControl>
                    </FormGroup>

                    <Button disabled = {loading} variant="contained"  type='submit' sx={{width:'100%'}}>Logga in</Button>

                </form>


                {/* <div className='w-100 text-center mt-3'>
                    <Link to="/forgot-password">Glömt lösenord?</Link>
                </div> */}
                <Typography align='center' sx={{mt:2}}>
                    <Link to="/forgot-password" style={{textDecoration:'none', color:'#ACD0C0'}}>Glömt lösenord?</Link>
                </Typography>


            </CardContent>
        </Card>
        {/* <div className='w-100 text-center mb-0'> 
                Behöver du ett konto? <Link to="/signup" >Registrera här</Link>
        </div> */}
        <Typography sx={{textAlign:'center',width:'100vw' ,left:0, bottom: 10, position:'fixed'}}>
            Inget konto? <Link to="/signup" style={{textDecoration:'none', color:'#ACD0C0'}}>Registrera dig här</Link>
        </Typography>
    </ThemeProvider>
    </>
  )
}
