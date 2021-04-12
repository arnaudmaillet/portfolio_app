import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import Title from './../../components/Title/Title.js'

import MyData from '../../utils/Data.js'

import './Veilles.scss'

const Veilles = () => {
    return (
        <Paper elevation={MyData.settings.cardElevation}>
            <Grid container className='about-me'>
                <Title classSection='about-me'>{MyData.tech.title}</Title>
            </Grid>
        </Paper>
    )
}

export default Veilles
