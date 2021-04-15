import React, { useState } from 'react'
import { FormControlLabel, Switch, Button, Paper, Typography, makeStyles, IconButton, Tooltip, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import './Navbar.scss'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, withRouter } from 'react-router-dom';
import MyData from '../../utils/Data.js'
import CustomButton from "./../Button/Button.js"

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

    const [create, setCreate] = useState(false)
    const [dialog, setDialog] = useState(false)
    const [darkMode, setDarkMode] = useState(MyData.settings.darkmodeDefault)
    const [link, setlink] = useState('accueil')
    const classes = style()

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
                        <Tooltip title='Se connecter' placement="left">
                            <IconButton
                                className='myNavbar_content_right_section_authentication'
                                aria-label="Authentication"
                                onClick={() => setDialog(!dialog)}>
                                {MyData.icons.nav_authentication}
                            </IconButton>
                        </Tooltip>
                        <div className='myNavbar_content_right_section'>
                            <CustomButton
                                color='primary'
                                text='Contactez-moi'
                                icon={MyData.icons.btn_contact} />
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
            <Dialog open={dialog} onClose={() => setDialog(false)} aria-labelledby='form-dialog'>
                <DialogTitle id='dialog-authentication' className={classes.DialogBG}>
                    <div>{create ? 'S\'enregistrer' : 'Se connecter'}</div>
                    <IconButton className='myNavbar_dialog_title_close' onClick={() => setDialog(false)}>{MyData.icons.dialog_authentication_close}</IconButton>
                </DialogTitle>
                <DialogContent className='myNavbar_dialog_content'>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='username'
                        label="Nom d'utilisateur"
                        type='text'
                        fullWidth
                    />
                    <TextField
                        margin='dense'
                        id='password'
                        label='Mot de passe'
                        type='password'
                        fullWidth
                    />
                    {create ? (
                        <TextField
                        margin='dense'
                        id='passwordCheck'
                        label='Confirmer le mot de passe'
                        type='password'
                        fullWidth
                    />
                    ) : null}
                </DialogContent>
                <DialogActions className='myNavbar_dialog_actions'>
                    <a className={['myNavbar_dialog_actions_create', classes.textDark].join(' ')} onClick={() => setCreate(!create)}>{create ? 'Retour à la connexion' : 'Créer un compte'}</a>
                    <CustomButton color='primary' text={create ? 'S\'enregistrer' : 'Connexion'} icon={create ? MyData.icons.dialog_authentication_create : MyData.icons.dialog_authentication_connection}/>
                </DialogActions>
            </Dialog>
        </Paper>
    )
}
export default withRouter(MyNavbar)

