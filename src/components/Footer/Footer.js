import React from 'react'
import './Footer.scss'
import MyData from '../../utils/Data.js'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <a href='/' className='footer_left_terms'>Mentions légales</a>
            </div>
            <div className='footer_right'>
                <div className='footer_right_copyrights'>Tout droits reservés à
                    <span className='footer_right_copyrights_name'>&nbsp;{MyData.profile.name}</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
