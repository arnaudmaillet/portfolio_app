import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import MyData from './../../utils/data.js'
import Title from './../../components/Title/Title.js'

import './Accueil.scss'

const Accueil = () => {
    return (
        <>
            {/* A propos */}
            <Grid container className='about-me'>
                <Title classSection='about-me'>{MyData.AboutSection.title}</Title>
                <Grid item xs={12}>
                    <Typography className='about-me_text'>{MyData.AboutSection.text}</Typography>
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
