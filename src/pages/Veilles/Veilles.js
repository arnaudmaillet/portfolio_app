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
                <Grid container >
                    <Grid item xs={12}>
                        <Grid container className='about-me'>
                            <Title classSection='about-me'>{MyData.veilles.droit.title}</Title>
                            <Grid item xs={12}>
                                {MyData.veilles.droit.items.map((item) => (
                                    <>
                                        <Typography style={{ fontSize: '16px', fontWeight: '600' }}>{item.title}</Typography>
                                        <div style={{ marginTop: '20px' }}>{item.link}</div>
                                    </>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid container className='about-me'>
                            <Title classSection='about-me'>{MyData.veilles.tech.title}</Title>
                            <Grid item xs={12}>
                                {MyData.veilles.tech.items.map((item) => (
                                    <>
                                        <Typography style={{ fontSize: '16px', fontWeight: '600' }}>{item.title}</Typography>
                                        <div style={{ marginTop: '20px' }}>{item.link}</div>
                                    </>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </motion.div>
        </Paper>
    )
}

export default Veilles
