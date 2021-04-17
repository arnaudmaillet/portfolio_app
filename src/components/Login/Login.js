import React from 'react'
import { Grid, Paper, Typography, makeStyles, TextField, InputAdornment } from '@material-ui/core'
import Title from './../Title/Title.js'

import MyData from '../../utils/Data.js'

import './Login.scss'

const Login = () => {
    return (
        <Paper elevation={MyData.settings.cardElevation} className='authentication'>
            <Grid container>
                <Title classSection='authentication_title'>{MyData.authentication.login.title}</Title>
                <Grid item xs={12}>
                    <TextField
                        id="login"
                        label={MyData.authentication.login.usernameField}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    {MyData.icons.authentication_username}
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="password"
                        label={MyData.authentication.login.passwordField}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    {MyData.icons.authentication_password}
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Login
