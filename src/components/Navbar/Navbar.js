import React, { useState } from 'react'
import { Tooltip, Button } from "@material-ui/core";
import './Navbar.scss'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, withRouter } from 'react-router-dom';
import MyData from '../../utils/Data.js'
import CustomButton from "./../Button/Button.js"
import scrollTo from "gatsby-plugin-smoothscroll";



const MyNavbar = (props) => {

    // Debug navlink
    // const pathName = props.location.pathName -> error : props & location can be empty
    // if props exist & location exist
    //const pathName = props?.location?.pathName

    const [link, setlink] = useState('accueil')
    
    const [arrowTop, setArrowTop] = useState(false)

    return (
        <Navbar expand='lg' sticky={MyData.navbar} className='myNavbar'>
            <Tooltip arrow title='Remonter en haut de page' placement="bottom">
                <Button
                    variant='contained'
                    color = 'primary'
                    className='header_navlink' 
                    onMouseEnter={()=>setArrowTop(true)}
                    onMouseLeave={()=>setArrowTop(false)}
                    onClick={()=>scrollTo('#top')}>
                    <Navbar.Brand className='myNavbar_home'>
                        {link === 'accueil' && !arrowTop ? MyData.icons.nav_item1 : null}
                        {link === 'formations' && !arrowTop ? MyData.icons.nav_item2 : null}
                        {link === 'projets' && !arrowTop ? MyData.icons.nav_item3 : null}
                        {link === 'veilles' && !arrowTop ? MyData.icons.nav_item4 : null} 
                        {arrowTop ? MyData.icons.nav_top : null}  
                    </Navbar.Brand>
                </Button>
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
                        <CustomButton
                            color='primary'
                            text='Contactez-moi'
                            icon={MyData.icons.btn_contact} />
                    </div>
                </div>

            </Navbar.Collapse>
        </Navbar>
    )
}
export default withRouter(MyNavbar)

