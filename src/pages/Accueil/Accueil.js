import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import MyData from './../../utils/data.js'

import './Accueil.scss'

const Accueil = () => {
    return (
        <>
            {/* A propos */}
            <Grid container className='about-me'>
                <Grid item className='about-me_title'>
                    <span></span>
                    <Typography variant='h6'>{MyData.AboutSection.title}</Typography>
                </Grid>
            </Grid>

            {/* Parcours */}
            <Grid container className='section'></Grid>

            {/* Nouveautées */}
            <Grid container className='section'></Grid>
        </>
    )
}

export default Accueil
