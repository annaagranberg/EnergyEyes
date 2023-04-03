import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { CardContent, FormControl, FormGroup, ThemeProvider, Button, Alert, TextField, InputAdornment, Typography } from '@mui/material'
import theme from '../contexts/Theme';
import Card from '@mui/material/Card';
import { Person, Password } from '@mui/icons-material';



export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const nameRef = useRef()
    const { currentUser, updateEmail, updatePassword, updateName } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

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

        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }
        if(typeof nameRef.current.value === 'string'){
            promises.push(updateName(nameRef.current.value))
        }
        console.log(promises[0])

        Promise.all(promises).then(() => {
            navigate('/')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })
    }

  return (
    <>
    <ThemeProvider theme={theme}>
        <Card sx={{ minWidth: 270, mt: '10vh'}} elevation={0}>
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
                        <TextField variant='standard' label='lösenord' type='password' inputRef={passwordRef} placeholder='Lämna tom för samma'
                        sx={{mb:3}} InputProps={{
                            startAdornment:(
                                <InputAdornment position='start'>
                                    <Password />
                                </InputAdornment>
                            ),
                        }}/>
                    </FormGroup>

                    <FormGroup id="password-confirm">
                        <TextField variant="standard" label="bekräfta lösenord" type='password' inputRef={passwordConfirmRef} placeholder='Leave blank to keep the same'
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
                            <TextField variant="standard" label="Förnamn" type='name' inputRef={nameRef} placeholder={currentUser.email}
                            sx={{ mb:3, maxWidth:'49%', minWidth:'140px' }} InputProps={{
                                startAdornment:(
                                    <InputAdornment position='start'>
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}/>
                            <TextField variant="standard" label="Efternamn" type='name' inputRef={nameRef} placeholder= {currentUser.email}
                            sx={{ mb:3, maxWidth:'49%', minWidth:'140px' }} InputProps={{
                                startAdornment:(
                                    <InputAdornment position='start'>
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}/>
                        </FormControl>
                    </FormGroup>

                    <Button disabled = {loading} variant="contained" type='submit' sx={{width:'100%'}}>Updatera</Button>
                </form>
            </CardContent>
        </Card>

        <Typography align='center' sx={{mt:2}}>
                    <Link to="/profile" style={{textDecoration:'none', color:'#ACD0C0'}}>Tillbaka</Link>
        </Typography>
    </ThemeProvider>
    </>
  )
}
