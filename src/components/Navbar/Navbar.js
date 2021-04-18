import React, { useState, useEffect } from 'react'
import { FormControlLabel, Switch, Button, Paper, Typography, makeStyles } from "@material-ui/core";
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

    const [darkMode, setDarkMode] = useState(MyData.settings.darkmodeDefault)
    const [link, setlink] = useState('accueil')
    const classes = style()

    const [loginStatus, setLoginStatus] = useState(false)


    const logout = () => {
        Axios.post("http://localhost:3003/logout").then((response) => {
            setLoginStatus(false)
        })
    }

    useEffect(() => {
        Axios.get('http://localhost:3003/login').then((response) => {
            console.log(response.data.loggedIn);
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
                        <div className='myNavbar_content_right_section'>
                            <Nav.Link
                                    exact
                                    as={NavLink}
                                    to='/login'
                                    onClick={() => setlink('login')}>
                                <CustomButton
                                    outlined={loginStatus ? false : true}
                                    color='primary'
                                    text={ loginStatus ? 'Dashboard' : 'Se connecter'}
                                    icon={MyData.icons.nav_authentication} />
                            </Nav.Link>
                            {loginStatus ? (
                                <CustomButton text='Se déconnecter' onClick={logout}/>
                            ) : <div></div>}
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
        </Paper>
    )
}
export default withRouter(MyNavbar)

