import React from 'react'
import './Footer.scss'
import MyData from '../../utils/Data.js'
import { makeStyles } from "@material-ui/core";

const style = makeStyles(theme => ({
    color: {
        color: theme.palette.primary.main,
        "&:hover": {
            color: theme.palette.primary.main,
        }
    },
}))

const Footer = () => {
    const classes = style()
    return (
        <div className='footer'>
            <div className='footer_left'>
                <a href='/' className={['footer_left_terms', classes.color].join(' ')}>Mentions légales</a>
            </div>
            <div className='footer_right'>
                <div className='footer_right_copyrights'>Tout droits reservés à
                    <span className='footer_right_copyrights_name'>&nbsp;{MyData.profile.name + ' '}{MyData.profile.firstName}</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
