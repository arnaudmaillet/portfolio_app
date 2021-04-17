import React, { useState, useEffect } from 'react'
import { FormControlLabel, Switch, Button, Paper, Typography, makeStyles, IconButton, Tooltip, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import Axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, withRouter } from 'react-router-dom';
import MyData from '../../utils/Data.js'
import CustomButton from "./../Button/Button.js"

import './Navbar.scss'

const style = makeStyles(theme => ({
    textDark: {
        color: theme.palette.info.dark,
        transition: MyData.settings.transitionEffect,
        "&:hover": {
            color: theme.palette.primary.main
        },
    },
    active: {
        color: theme.palette.primary.main
    },
    DisabledDarkMode: {
        color: theme.palette.info.main
    },
    EnabledDarkMode: {
        color: theme.palette.primary.main
    },
    DialogBG: {
        backgroundColor: theme.palette.primary.main
    }
}))

const MyNavbar = ({ onChange, checked }) => {

    // Je ne sais pas a quoi ca sert mais ne marche pas si il n'est pas présent
    Axios.defaults.withCredentials = true

    const [create, setCreate] = useState(false)
    const [dialogIn, setDialogIn] = useState(false)
    const [dialogOut, setDialogOut] = useState(false)
    const [darkMode, setDarkMode] = useState(MyData.settings.darkmodeDefault)
    const [link, setlink] = useState('accueil')
    const classes = style()

    // Authentication states & functions
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginStatus, setLoginStatus] = useState(false)
    const [loginStatusMsg, setLoginStatusMsg] = useState('')

    const register = () => {
        Axios.post("http://localhost:3003/register", {
            username: username,
            password: password,
        }).then((response) => {
            setLoginStatusMsg(response.data.message)
            setCreate(false)
        })
    }

    const login = () => {
        Axios.post("http://localhost:3003/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatusMsg(response.data.message)
            } else {
                setLoginStatus(true)
            }
        })
    }

    const logout = () => {
        Axios.get("http://localhost:3003/logout").then((response) => {
            console.log(response);
        })
    }

    useEffect(() => {
        Axios.get('http://localhost:3003/login').then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(true)
            }
        })
    }, [])

    const handleClickLogout = () => {
        setLoginStatus(false); 
        setDialogOut(false)
        setUsername('');
        setPassword('')
    }

    return (
        <Paper elevation={MyData.settings.cardElevation}>
            <Navbar expand='lg' sticky={MyData.navbar} className='myNavbar'>
                <Button
                    variant='contained'
                    color='primary'
                    className='header_navlink'>
                    <Navbar.Brand className='myNavbar_home'>
                        {link === 'accueil' ? MyData.icons.nav_item1 : null}
                        {link === 'formations' ? MyData.icons.nav_item2 : null}
                        {link === 'projets' ? MyData.icons.nav_item3 : null}
                        {link === 'veilles' ? MyData.icons.nav_item4 : null}
                        {link === 'login' ? MyData.icons.nav_authentication : null}
                    </Navbar.Brand>
                </Button>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <div className='myNavbar_content'>
                        <Nav className='myNavbar_content_left_section'>

                            {/* Accueil */}
                            <Nav.Link
                                exact
                                as={NavLink}
                                to='/'
                                onClick={() => setlink('accueil')}
                            ><Typography className={[link === 'accueil' ? classes.active : classes.textDark, 'myNavbar_content_left_section_link'].join(' ')}>Accueil</Typography></Nav.Link>

                            {/* Formations */}
                            <Nav.Link
                                exact
                                as={NavLink}
                                to='/formations'
                                className='myNavbar_content_left_section_link'
                                onClick={() => setlink('formations')}
                            ><Typography className={[link === 'formations' ? classes.active : classes.textDark, 'myNavbar_content_left_section_link'].join(' ')}>Formations</Typography></Nav.Link>

                            {/* Projets */}
                            <Nav.Link
                                exact
                                as={NavLink}
                                to='/projets'
                                className='myNavbar_content_left_section_link'
                                onClick={() => setlink('projets')}
                            ><Typography className={[link === 'projets' ? classes.active : classes.textDark, 'myNavbar_content_left_section_link'].join(' ')}>Projets</Typography></Nav.Link>

                            {/* Veilles */}
                            <Nav.Link
                                exact
                                as={NavLink}
                                to='/veilles'
                                className='myNavbar_content_left_section_link'
                                onClick={() => setlink('veilles')}
                            ><Typography className={[link === 'veilles' ? classes.active : classes.textDark, 'myNavbar_content_left_section_link'].join(' ')}>Veilles</Typography></Nav.Link>
                        </Nav>
                        <Tooltip title={loginStatus ? 'Se déconnecter' : 'Se connecter'} placement="left">
                            <IconButton
                                color={loginStatus ? 'primary' : ''}
                                className='myNavbar_content_right_section_authentication'
                                aria-label="Authentication"
                                onClick={loginStatus ? () => setDialogOut(!dialogOut) : () => setDialogIn(!dialogIn)}
                                >
                                {MyData.icons.nav_authentication}
                            </IconButton>
                        </Tooltip>
                        <div className='myNavbar_content_right_section'>
                            <Nav.Link
                                    exact
                                    as={NavLink}
                                    to='/login'
                                    onClick={() => setlink('login')}>
                                <CustomButton
                                    outlined={link === 'login' ? false : true}
                                    color='primary'
                                    text='Se connecter'
                                    icon={MyData.icons.nav_authentication} />
                            </Nav.Link>
                        </div>
                        <FormControlLabel
                            className='myNavbar_content_right_section_darkmode'
                            control={
                                <Switch
                                    checked={checked}
                                    onChange={onChange}
                                    onClick={() => setDarkMode(!darkMode)}
                                    color="primary"
                                />

                            }
                        />
                        <div className='myNavbar_content_right_section_icons'>
                            <div className={darkMode ? classes.DisabledDarkMode : classes.EnabledDarkMode}>{MyData.icons.nav_darkmode_light}</div>
                            <div className={darkMode ? classes.EnabledDarkMode : classes.DisabledDarkMode}>{MyData.icons.nav_darkmode_dark}</div>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            {loginStatus ? (
                <Dialog open={dialogOut} onClose={() => setDialogOut(false)} aria-labelledby='form-dialogout'>
                    <DialogActions className='myNavbar_dialog_logout'>
                        <CustomButton
                            outlined
                            color='primary'
                            text='Annuler'
                            onClick={() => setDialogOut(false)} />
                        <CustomButton
                            color='primary'
                            text='Se déconnecter'
                            icon={MyData.icons.dialog_authentication_logout}
                            onClick={logout, handleClickLogout} />
                    </DialogActions>
                </Dialog>
            ) : (
                <Dialog open={dialogIn} onClose={() => setDialogIn(false)} aria-labelledby='form-dialogin'>
                    <DialogTitle id='dialog-authentication' className={classes.DialogBG}>
                        <div>{create ? 'S\'enregistrer' : 'Se connecter'}</div>
                        <IconButton className='myNavbar_dialog_title_close' onClick={() => setDialogIn(false)}>{MyData.icons.dialog_close}</IconButton>
                    </DialogTitle>
                    <DialogContent className='myNavbar_dialog_content'>
                        <TextField
                            autoFocus
                            margin='dense'
                            id='username'
                            label="Nom d'utilisateur"
                            type='text'
                            fullWidth
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin='dense'
                            id='password'
                            label='Mot de passe'
                            type='password'
                            fullWidth
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {create ? (
                            <TextField
                                margin='dense'
                                id='passwordCheck'
                                label='Confirmer le mot de passe'
                                type='password'
                                fullWidth
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        ) : null}
                        <Typography className='myNavbar_dialog_content_login-msg'>{loginStatusMsg}</Typography>
                    </DialogContent>
                    <DialogActions className='myNavbar_dialog_actions'>
                        <a
                            className={['myNavbar_dialog_actions_create', classes.textDark].join(' ')}
                            onClick={() => {
                                setCreate(!create)
                                setLoginStatusMsg('')}}>
                            {create ? 'Retour à la connexion' : 'Créer un compte'}
                        </a>
                        <CustomButton
                            color='primary'
                            text={create ? 'S\'enregistrer' : 'Connexion'}
                            icon={create ? MyData.icons.dialog_authentication_create : MyData.icons.dialog_authentication_login}
                            onClick={create ? register : login} />
                    </DialogActions>
                </Dialog>
            )}
        </Paper>
    )
}
export default withRouter(MyNavbar)

