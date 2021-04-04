import React, { useState } from 'react'
import { Tooltip } from "@material-ui/core";
import './Navbar.scss'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, withRouter } from 'react-router-dom';
import MyData from './../../utils/data.js'
import CustomButton from "./../Button/Button.js"
import scrollTo from "gatsby-plugin-smoothscroll";



const MyNavbar = (props) => {

    // Debug navlink
    // const pathName = props.location.pathName -> error : props & location can be empty
    // if props exist & location exist
    //const pathName = props?.location?.pathName

    const [link, setlink] = useState('accueil') 

    return (
        <Navbar expand='lg' sticky={MyData.navbar} className='myNavbar'>
            <Tooltip arrow title='Remonter en haut de page' placement="bottom">
                <button className='header_navlink' onClick={() => scrollTo('#top')}>
                    <Navbar.Brand className='myNavbar_home'>
                        {link === 'accueil' ? MyData.icons.nav_item1 : null}
                        {link === 'formations' ? MyData.icons.nav_item2 : null}
                        {link === 'projets' ? MyData.icons.nav_item3 : null}
                        {link === 'veilles' ? MyData.icons.nav_item4 : null}   
                    </Navbar.Brand>
                </button>
            </Tooltip>

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
                            onClick={()=> setlink('accueil')}
                        >Accueil</Nav.Link>

                        {/* Formations */}
                        <Nav.Link
                            exact
                            as={NavLink}
                            to='/formations'
                            className='myNavbar_content_left_section_link'
                            onClick={()=> setlink('formations')}
                        >Formations</Nav.Link>

                        {/* Projets */}
                        <Nav.Link
                            exact
                            as={NavLink}
                            to='/projets'
                            className='myNavbar_content_left_section_link'
                            onClick={()=> setlink('projets')}
                        >Projets</Nav.Link>

                        {/* Veilles */}
                        <Nav.Link
                            exact
                            as={NavLink}
                            to='/veilles'
                            className='myNavbar_content_left_section_link'
                            onClick={()=> setlink('veilles')}
                        >Veilles</Nav.Link>
                    </Nav>
                    <div className='myNavbar_content_right_section'>
                        {/* Foreach social object in array, define key as social object */}
                        {/* {Object.keys(MyData.socials).map((key) => (
                        <a
                            key = {key}
                            href={MyData.socials[key].link}
                            target='_blank'>{MyData.socials[key].icon}</a>
                        ))} */}
                        <CustomButton
                            text='Contactez-moi'
                            icon={MyData.icons.btn_contact} />
                    </div>
                </div>

            </Navbar.Collapse>
        </Navbar>
    )
}
export default withRouter(MyNavbar)

