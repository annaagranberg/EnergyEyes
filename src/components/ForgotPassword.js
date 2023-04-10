import React, { useRef, useState } from 'react'
//import { Button, Alert, FormLabel, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { CardContent, FormGroup, Alert, FormControl, Button, TextField, InputAdornment, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import { Person } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../contexts/Theme';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further information')
        } catch{
            setError("Failed to reset password")
        }
        setLoading(false)
    }

  return (
    <>
    <ThemeProvider theme={theme}>
        <Button component={Link} to="/login" sx={{padding:0, mt:2}}>
          <ArrowBackIosIcon/>
        </Button>
        <Card sx={{ minWidth: 270, mt: '28vh'}}  elevation={0}>
            <CardContent>
                <h2 className='text-center mb-4'>Ändra lösenord</h2>
                {error && <Alert sx= {{mb:3}} severity="error">{error}</Alert> }
                {message && <Alert sx= {{mb:3}} severity="sucess">{message}</Alert> }

                <form onSubmit={handleSubmit}>
                    <FormGroup id="email">
                        <FormControl type='email' ref={emailRef} required/>
                        <TextField variant="standard" type='email' label="email" inputRef={emailRef} sx={{mb:3}}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Person />
                              </InputAdornment>
                            ),
                          }}
                        required/>
                    </FormGroup>
                    <Button disabled = {loading} variant="contained"  type='submit' sx={{width:'100%'}}>Skicka mail</Button>
                </form>

            </CardContent>
        </Card>

            <Typography sx={{textAlign:'center',width:'100vw' ,left:0, bottom: 10, position:'absolute'}}>
                Inget konto? <Link to="/signup" style={{textDecoration:'none', color:'#ACD0C0'}}>Registrera dig</Link>
            </Typography>

    </ThemeProvider>
    </>
  )
}
