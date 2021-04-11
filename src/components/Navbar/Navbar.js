import React, { useState } from 'react'
import { Tooltip, FormControlLabel, Switch, Button, Paper } from "@material-ui/core";
import './Navbar.scss'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, withRouter } from 'react-router-dom';
import MyData from '../../utils/Data.js'
import CustomButton from "./../Button/Button.js"



const MyNavbar = ({ props, onChange, checked }) => {

    // Debug navlink
    // const pathName = props.location.pathName -> error : props & location can be empty
    // if props exist & location exist
    //const pathName = props?.location?.pathName

    const [link, setlink] = useState('accueil')


    return (
        <Paper>
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
                                className='myNavbar_content_left_section_link'
                                onClick={() => setlink('accueil')}
                            >Accueil</Nav.Link>

                            {/* Formations */}
                            <Nav.Link
                                exact
                                as={NavLink}
                                to='/formations'
                                className='myNavbar_content_left_section_link'
                                onClick={() => setlink('formations')}
                            >Formations</Nav.Link>

                            {/* Projets */}
                            <Nav.Link
                                exact
                                as={NavLink}
                                to='/projets'
                                className='myNavbar_content_left_section_link'
                                onClick={() => setlink('projets')}
                            >Projets</Nav.Link>

                            {/* Veilles */}
                            <Nav.Link
                                exact
                                as={NavLink}
                                to='/veilles'
                                className='myNavbar_content_left_section_link'
                                onClick={() => setlink('veilles')}
                            >Veilles</Nav.Link>
                        </Nav>
                        <div className='myNavbar_content_right_section'>
                            <FormControlLabel
                                className='myNavbar_content_right_section_darkmode'
                                control={
                                    <Switch
                                        checked={checked}
                                        onChange={onChange}
                                        color="primary"
                                    />
                                }
                            />
                            <CustomButton
                                color='primary'
                                text='Contactez-moi'
                                icon={MyData.icons.btn_contact} />
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </Paper>
    )
}
export default withRouter(MyNavbar)

