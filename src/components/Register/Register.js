import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Grid, Paper, Typography, makeStyles, TextField } from '@material-ui/core'
import CustomButton from '../Button/Button.js'

import MyData from '../../utils/Data.js'

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

    const classes = style()

    const [confirmPassword, setConfirmPassword] = useState(false)

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
                                variant='outlined'/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='authentication_register_password'>
                    <Grid container spacing={1}>
                        <Grid item className='authentication_register_icon'>
                            {MyData.icons.authentication_password}
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                type="password"
                                className='authentication_register_textField'
                                id="password"
                                label={MyData.authentication.register.passwordField}
                                variant='outlined' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='authentication_register_password'>
                    <Grid container spacing={1}>
                        <Grid item>
                            <TextField
                                required
                                type={ confirmPassword ? 'text' : 'password'}
                                className='authentication_register_textField'
                                id="passwordConfirm"
                                label={MyData.authentication.register.passwordConfirmField}
                                variant='outlined'/>
                        </Grid>
                        <Grid item className={ confirmPassword ? ['authentication_register_icon_right', classes.primary].join(' ') : 'authentication_register_icon_right'} onClick={() => setConfirmPassword(!confirmPassword)} >
                            { confirmPassword ? MyData.icons.authentication_register_showPassword : MyData.icons.authentication_register_hidePassword}
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
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Register
