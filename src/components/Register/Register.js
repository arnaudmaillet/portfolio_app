import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Grid, Paper, Typography, makeStyles, TextField, Snackbar, Tooltip} from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import CustomButton from '../Button/Button.js'

import MyData from '../../utils/Data.js'

import Axios from 'axios'

import './Register.scss'

const style = makeStyles(theme => ({
    text: {
        color: theme.palette.info.main
    },
    primary: {
        color: theme.palette.primary.main
    }
}))


const Register = () => {

    // Je ne sais pas a quoi ca sert mais ne marche pas si il n'est pas présent
    Axios.defaults.withCredentials = true

    const classes = style()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [msg, setMsg] = useState('')
    const [alertOpen, setAlertOpen] = useState(false)
    const [alertType, setAlertType] = useState('')
    const [confirmPasswordShow, setConfirmPasswordShow] = useState(false)

    const register = () => {
        if (username === '' || password ==='') {
            setMsg("Erreur : Veuillez remplir tous les champs !")
            setAlertType('error')
            setAlertOpen(true)
            return;
        }
        if (password.toString().length < 7) {
            setMsg("Erreur : Le mot de passe doit contenir au minimum 8 caractères !")
            setAlertType('error')
            setAlertOpen(true)
            return;
        }
        if (password === confirmPassword) {
            Axios.post("http://localhost:3003/register", {
            username: username,
            password: password,
        }).then((response) => {
            setMsg(response.data.message)
            setAlertType('success')
            setAlertOpen(true)
        })
        } else {
            setMsg("Veuillez réessayer : Les mots de passe dans les champs 'mot de passe' et 'confirmer le mot de passe' doivent être identiques !")
            setAlertType('error')
            setAlertOpen(true)
        }
    }

    return (
        <Paper elevation={MyData.settings.cardElevation} className='authentication'>
            <Grid container className='authentication_register'>
                <Grid item xs={12} className='authentication_register_username'>
                    <Grid container spacing={1}>
                        <Grid item className='authentication_register_icon'>
                            {MyData.icons.authentication_username}
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                className='authentication_login_textField'
                                id="login"
                                label={MyData.authentication.register.usernameField}
                                variant='outlined'
                                onChange={(e) => setUsername(e.target.value)}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='authentication_register_password'>
                    <Grid container spacing={1}>
                        <Grid item className='authentication_register_icon'>
                            {MyData.icons.authentication_password}
                        </Grid>
                        <Tooltip title='Le mot de passe doit contenir au minimum 8 caractères !' placement='right'>
                        <Grid item>
                            <TextField
                                required
                                type="password"
                                className='authentication_register_textField'
                                id="password"
                                label={MyData.authentication.register.passwordField}
                                variant='outlined' 
                                onChange={(e) => setPassword(e.target.value)}/>
                        </Grid>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='authentication_register_password'>
                    <Grid container spacing={1}>
                        <Grid item>  
                            <TextField
                                required
                                type={ confirmPasswordShow ? 'text' : 'password'}
                                className='authentication_register_textField'
                                id="passwordConfirm"
                                label={MyData.authentication.register.passwordConfirmField}
                                variant='outlined'
                                onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </Grid>
                        <Grid item className={ confirmPasswordShow ? ['authentication_register_icon_right', classes.primary].join(' ') : 'authentication_register_icon_right'} onClick={() => setConfirmPasswordShow(!confirmPasswordShow)} >
                            { confirmPasswordShow ? MyData.icons.authentication_register_showPassword : MyData.icons.authentication_register_hidePassword}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='authentication_register_btn'>
                    <NavLink exact to='/login'>
                        <Typography className={['authentication_register_btn_left', classes.text].join(' ')}>{MyData.authentication.register.textBtnLeft}</Typography>
                    </NavLink>
                    <CustomButton
                        className='authentication_register_btn_register'
                        color='primary'
                        text={MyData.authentication.register.textBtnLogin}
                        icon={MyData.icons.dialog_authentication_register}
                        onClick={register}
                    />
                </Grid>
            </Grid>
            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={() => setAlertOpen(false)}>
                <Alert onClose={() => setAlertOpen(false)} severity={alertType === 'success' ? 'success' : 'error'}>
                    {msg}
                </Alert>
            </Snackbar>
        </Paper>
    )
}

export default Register
