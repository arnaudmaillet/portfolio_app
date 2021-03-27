import React from 'react'
import { Typography } from '@material-ui/core'

import Timeline from './../Timeline/Timeline.js'

import './Header.scss'
import ImgProfil from './../../assets/img/profil.jpg'

const Header = () => {
    return (
        <div className='profile'>
            <div className='profile_name'>
                <Typography className='profile_name_text'>Maillet Arnaud</Typography>
                <Typography className='profile_name_title'>Developper par passion</Typography>
            </div>
            <div className='profile_img'>
                <img src={ImgProfil} alt='picture'/>
            </div>
            <div className = 'profile_information'>
                <Timeline/>
                <button>Mon CV</button>
            </div>
        </div>
    )
}

export default Header
