import React from 'react'
import './Navbar.scss'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, withRouter } from 'react-router-dom';
import MyData from './../../utils/data.js'
import CustomButton from "./../Button/Button.js";

import { HomeRounded } from '@material-ui/icons';

const MyNavbar = (props) => {

    // const pathName = props.location.pathName -> error : props & location can be empty
    // if props exist & location exist
    const pathName = props?.location?.pathName

    return (
        <Navbar expand='lg' sticky={MyData.navbar} className='myNavbar'>
            <Nav.Link as={NavLink} to='/' exact className='header_navlink'>
                <Navbar.Brand className='myNavbar_home'>
                    <HomeRounded/>
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='myNavbar_left_section'>
                    {/* Accueil */}
                    <Nav.Link 
                        exact
                        as={NavLink} 
                        to='/' 
                        className='myNavbar_left_section_link'
                        >Accueil</Nav.Link>

                    {/* Formations */}
                    <Nav.Link
                        exact 
                        as={NavLink} 
                        to='/formations' 
                        className='myNavbar_left_section_link'
                        >Formations</Nav.Link>

                    {/* Projets */}
                    <Nav.Link
                        exact 
                        as={NavLink} 
                        to='/projets' 
                        className='myNavbar_left_section_link'
                        >Projets</Nav.Link>

                    {/* Veilles */}
                    <Nav.Link
                        exact 
                        as={NavLink} 
                        to='/veilles' 
                        className='myNavbar_left_section_link'
                        >Veilles</Nav.Link>
                </Nav>
                <div className='myNavbar_right_section'>
                    {/* Foreach social object in array, define key as social object */}
                    {Object.keys(MyData.socials).map((key) => (
                        <a
                            key = {key}
                            href={MyData.socials[key].link}
                            target='_blank'>{MyData.socials[key].icon}</a>
                    ))}
                    <CustomButton
                        text='Contactez-moi'
                        icon={MyData.icons.btn_contact}/>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(MyNavbar)
