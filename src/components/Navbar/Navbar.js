// Import dependances
import React, { useState, useEffect } from 'react'
import { FormControlLabel, Switch, Button, Paper, Typography, makeStyles, Snackbar } from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, withRouter } from 'react-router-dom';
import MyData from '../../utils/Data.js'
import { AnimatePresence, motion } from "framer-motion";

// Import components
import CustomButton from "./../Button/Button.js"

// Import style
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

    const currentRoute = props.location.pathname 
    const [darkMode, setDarkMode] = useState(MyData.settings.darkmodeDefault)
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
            if (response.data.loggedIn === true) {
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
                    <AnimatePresence exitBeforeEnter>
                            <Navbar.Brand className='myNavbar_home'>
                                {currentRoute === '/' ? <motion.div animate={{x: 0 }} initial={{x: "100px" }} transition={{duration: 0.5}}> {MyData.icons.nav_item1} </motion.div>: null}
                                {currentRoute === '/formations' ? <motion.div animate={{x: 0 }} initial={{x: "100px" }} transition={{duration: 0.5}}> {MyData.icons.nav_item2} </motion.div> : null}
                                {currentRoute === '/projets' ? <motion.div animate={{x: 0 }} initial={{x: "100px" }} transition={{duration: 0.5}}> {MyData.icons.nav_item3} </motion.div> : null}
                                {currentRoute === '/veilles' ? <motion.div animate={{x: 0 }} initial={{x: "100px" }} transition={{duration: 0.5}}> {MyData.icons.nav_item4} </motion.div>: null}
                                {currentRoute === '/login' ? <motion.div animate={{x: 0 }} initial={{x: "100px" }} transition={{duration: 0.5}}> {MyData.icons.nav_authentication} </motion.div>: null}
                            </Navbar.Brand>
                    </AnimatePresence>
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
                            ><Typography className={currentRoute === '/' ? classes.active : classes.textDark}>Accueil</Typography></NavLink>

                            {/* Formations */}
                            <NavLink
                                exact
                                to='/formations'
                                className='myNavbar_content_left_section_link'
                            ><Typography className={currentRoute === '/formations' ? classes.active : classes.textDark}>Formations</Typography></NavLink>

                            {/* Projets */}
                            <NavLink
                                exact
                                to='/projets'
                                className='myNavbar_content_left_section_link'
                            ><Typography className={currentRoute === '/projets' ? classes.active : classes.textDark}>Projets</Typography></NavLink>

                            {/* Veilles */}
                            <NavLink
                                exact
                                to='/veilles'
                                className='myNavbar_content_left_section_link'
                            ><Typography className={currentRoute === '/veilles' ? classes.active : classes.textDark}>Veilles</Typography></NavLink>
                        </Nav>
                        <div className='myNavbar_content_right_section'>
                            <NavLink
                                className='myNavbar_content_right_section_btn'
                                exact
                                to='/login'>
                                <CustomButton
                                    outlined={loginStatus || props.logStatus ? false : true}
                                    color='primary'
                                    text={loginStatus || props.logStatus ? 'Dashboard' : 'Se connecter'}
                                    icon={MyData.icons.nav_authentication} />
                            </NavLink>
                            {loginStatus || props.logStatus ? (
                                <div className='myNavbar_content_right_section_logout'><CustomButton text='Se déconnecter' onClick={logout} color='primary' outlined /></div>
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

