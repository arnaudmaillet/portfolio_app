import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Title from './../../components/Title/Title.js'

import MyData from './../../utils/data.js'

import './Veilles.scss'

const Veilles = () => {
    return (
        <Grid container className='about-me'>
            <Title classSection='about-me'>{MyData.tech.title}</Title>
        </Grid>
    )
}

export default Veilles
