import React from 'react'
import { Grid, Paper, Typography, makeStyles, TextField, InputAdornment } from '@material-ui/core'
import CustomButton from '../Button/Button.js'

import MyData from '../../utils/Data.js'

import './Login.scss'


const Login = () => {
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
                                multiline />
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
                                className='authentication_login_textField'
                                id="password"
                                label={MyData.authentication.login.passwordField}
                                variant='outlined'
                                multiline />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='authentication_login_btn'>
                    <Typography className='authentication_login_btn_create'>{MyData.authentication.login.textBtnCreateAccount}</Typography>
                    <CustomButton
                        className='authentication_login_btn_login'
                        color='primary'
                        text={MyData.authentication.login.textBtnLogin}
                        icon={MyData.icons.dialog_authentication_login}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Login
