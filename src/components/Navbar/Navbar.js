import React, { useState, useEffect } from 'react'
import { FormControlLabel, Switch, Button, Paper, Typography, makeStyles, Snackbar } from "@material-ui/core";
import { Alert } from '@material-ui/lab';
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

const MyNavbar = (props) => {
    // Je ne sais pas a quoi ca sert mais ne marche pas si il n'est pas présent
    Axios.defaults.withCredentials = true

    const [darkMode, setDarkMode] = useState(MyData.settings.darkmodeDefault)
    const [link, setlink] = useState('accueil')
    const [msg, setMsg] = useState('')
    const [alertOpen, setAlertOpen] = useState(false)
    const [alertType, setAlertType] = useState('')
    const classes = style()

    const [loginStatus, setLoginStatus] = useState(false)


    const logout = () => {
        Axios.post("http://localhost:3003/logout").then((response) => {
            setLoginStatus(false)
            props.logOut(false)
            setMsg(response.data.message)
            setAlertType('success')
            setAlertOpen(true)
        })
    }

    useEffect(() => {
        Axios.get('http://localhost:3003/login').then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(true)
            }
        })
    }, [])


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
                            <NavLink
                                exact
                                to='/'
                                className='myNavbar_content_left_section_link'
                                onClick={() => setlink('accueil')}
                            ><Typography className={link === 'accueil' ? classes.active : classes.textDark}>Accueil</Typography></NavLink>

                            {/* Formations */}
                            <NavLink
                                exact
                                to='/formations'
                                className='myNavbar_content_left_section_link'
                                onClick={() => setlink('formations')}
                            ><Typography className={link === 'formations' ? classes.active : classes.textDark}>Formations</Typography></NavLink>

                            {/* Projets */}
                            <NavLink
                                exact
                                to='/projets'
                                className='myNavbar_content_left_section_link'
                                onClick={() => setlink('projets')}
                            ><Typography className={link === 'projets' ? classes.active : classes.textDark}>Projets</Typography></NavLink>

                            {/* Veilles */}
                            <NavLink
                                exact
                                to='/veilles'
                                className='myNavbar_content_left_section_link'
                                onClick={() => setlink('veilles')}
                            ><Typography className={link === 'veilles' ? classes.active : classes.textDark}>Veilles</Typography></NavLink>
                        </Nav>
                        <div className='myNavbar_content_right_section'>
                            <NavLink
                                    exact
                                    to='/login'
                                    onClick={() => setlink('login')}>
                                <CustomButton
                                    outlined={loginStatus || props.logStatus ? false : true}
                                    color='primary'
                                    text={ loginStatus || props.logStatus ? 'Dashboard' : 'Se connecter'}
                                    icon={MyData.icons.nav_authentication} />
                            </NavLink>
                            {loginStatus || props.logStatus ? (
                                <CustomButton text='Se déconnecter' onClick={logout} color='primary' outlined/>
                            ) : <div></div>}
                        </div>
                        <FormControlLabel
                            className='myNavbar_content_right_section_darkmode'
                            control={
                                <Switch
                                    checked={props.checked}
                                    onChange={props.onChange}
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
            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={() => setAlertOpen(false)}>
                <Alert onClose={() => setAlertOpen(false)} severity={alertType === 'success' ? 'success' : 'error'}>
                    {msg}
                </Alert>
            </Snackbar>
        </Paper>
    )
}
export default withRouter(MyNavbar)

