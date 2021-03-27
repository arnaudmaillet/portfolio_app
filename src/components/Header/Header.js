import React from 'react'
import { Typography } from '@material-ui/core'

import MyData from './../../utils/data.js'
import Timeline from './../Timeline/Timeline.js'

import './Header.scss'
import ImgProfil from './../../assets/img/profil.jpg'

const Header = () => {
    return (
        <div className='profile'>
            <div className='profile_name'>
                <Typography className='profile_name_text'>{MyData.profile.name}</Typography>
                <Typography className='profile_name_title'>{MyData.profile.title}</Typography>
            </div>
            <div className='profile_img'>
                <img src={ImgProfil} alt='picture'/>
            </div>
            <div className = 'profile_information'>
                <Timeline icon={MyData.icon.header_timeline}/>
                <button>Mon CV</button>
            </div>
        </div>
    )
}

export default Header
