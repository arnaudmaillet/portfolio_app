import React from 'react'

import './Header.scss'
import { Typography } from '@material-ui/core'

import ImgProfil from './../../assets/img/profil.jpg'

const Header = () => {
    return (
        <div className='profile'>
            <div className='profile_name'>
                <Typography className='profile_name_text'>Maillet Arnaud</Typography>
                <Typography className='profile_name_title'>Developper par passion</Typography>
            </div>
            <div className='profile_img'>
                <img src={ImgProfil} alt='Image de profil'/>
            </div>
            <div className = 'profile_information'>
                <p>Timeline</p>
                <button>Mon CV</button>
            </div>
        </div>
    )
}

export default Header
