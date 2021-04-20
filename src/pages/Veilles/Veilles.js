import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import Title from './../../components/Title/Title.js'
import { motion } from "framer-motion";

import MyData from '../../utils/Data.js'

import './Veilles.scss'

const Veilles = () => {
    return (
        <Paper elevation={MyData.settings.cardElevation}>
            <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.2 }}>
                <Grid container className='about-me'>
                    <Title classSection='about-me'>{MyData.tech.title}</Title>
                </Grid>
            </motion.div>
        </Paper>
    )
}

export default Veilles
