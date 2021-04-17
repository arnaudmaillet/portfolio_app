import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Grid, Paper, Typography, makeStyles, TextField, Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import CustomButton from '../Button/Button.js'

import Axios from 'axios'

import MyData from '../../utils/Data.js'

import './Login.scss'


const style = makeStyles(theme => ({
    text: {
        color: theme.palette.info.main
    }
}))

const Login = () => {

    // Je ne sais pas a quoi ca sert mais ne marche pas si il n'est pas présent
    Axios.defaults.withCredentials = true

    const classes = style()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const [alertOpen, setAlertOpen] = useState(false)

    const login = () => {
        Axios.post("http://localhost:3003/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setMsg(response.data.message)
            } else {
                setMsg('Erreur')
            }
        })
    }

    return (
        <Paper elevation={MyData.settings.cardElevation} className='authentication'>
            <Grid container>
                <Grid item xs={12} className='authentication_login_username'>
                    <Grid container spacing={1}>
                        <Grid item className='authentication_login_icon'>
                            {MyData.icons.authentication_username}
                        </Grid>
                        <Grid item>
                            <TextField
                                className='authentication_login_textField'
                                id="login"
                                label={MyData.authentication.login.usernameField}
                                variant='outlined'
                                onChange={(e) => setUsername(e.target.value)} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='authentication_login_password'>
                    <Grid container spacing={1}>
                        <Grid item className='authentication_login_icon'>
                            {MyData.icons.authentication_password}
                        </Grid>
                        <Grid item>
                            <TextField
                                type='password'
                                className='authentication_login_textField'
                                id="password"
                                label={MyData.authentication.login.passwordField}
                                variant='outlined'
                                onChange={(e) => setPassword(e.target.value)} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='authentication_login_btn'>
                    <NavLink exact to='/register'>
                        <Typography className={['authentication_login_btn_create', classes.text].join(' ')}>{MyData.authentication.login.textBtnCreateAccount}</Typography>
                    </NavLink>
                    <CustomButton
                        className='authentication_login_btn_login'
                        color='primary'
                        text={MyData.authentication.login.textBtnLogin}
                        icon={MyData.icons.dialog_authentication_login}
                        onClick={login}
                    />
                </Grid>
            </Grid>
            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={() => setAlertOpen(false)}>
                <Alert onClose={() => setAlertOpen(false)} severity="success">
                    {msg}
                </Alert>
            </Snackbar>
        </Paper>
    )
}

export default Login
