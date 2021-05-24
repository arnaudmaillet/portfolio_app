import React, { useState } from 'react'
import { Grid, Tabs, Tab, Grow, Card, CardMedia, CardContent, Typography, makeStyles, Paper } from '@material-ui/core'
import Axios from 'axios'

import Title from '../../components/Title/Title'
import MyData from "../../utils/Data.js"
import LinearWithValueLabel from './../../components/LinearProgress/LinearWithValueLabel.js'
import CustomButton from "./../../components/Button/Button.js";
import { motion } from "framer-motion";

import './Formations.scss'
import SkillsArray from '../../components/SkillsArray/SkillsArray'

const style = makeStyles(theme => ({
    text: {
        color: theme.palette.info.main,
    },
    borderColor: {
        border: '1px solid ' + theme.palette.primary.main,
    },
    active: {
        color: theme.palette.primary.main
    },
    notActive: {
        color: theme.palette.info.dark
    },
    icon: {
        color: theme.palette.info.main,
        "&:hover": {
            color: theme.palette.primary.main,
        },
    }
}))

const Formations = (props) => {

    const classes = style()

    const [tabValue, setTabValue] = useState('all')
    const [option, setoption] = useState(0)
    const [openDialog, setOpenDialog] = useState(false)

    return (
        <Paper elevation={MyData.settings.cardElevation}>
            <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.2 }}>
                {/* School training */}
                <Grid container className='school-training'>
                    <Title classSection='school-training'>{MyData.learning.schoolTraining.title}</Title>
                    <Grid item xs={12}>
                        <div className='school-training_item'>
                            <Typography className='school-training_item_title'>{MyData.learning.schoolTraining.btsSio.title}</Typography>
                            <CustomButton text='Tableau des compétences' color='primary' onClick={() => setOpenDialog(true)} />
                        </div>
                        <div>
                            <Typography className={['school-training_item_text', classes.text].join(' ')}>{MyData.learning.schoolTraining.btsSio.text}</Typography>
                        </div>
                        <Grid container>
                            <Grid item xs={12} md={3} style={{ marginTop: '22px' }}>
                                <Grid container>
                                    <Grid item xs={6} md={12} className='school-training_item_btn'>
                                        <div
                                            className='school-training_item_btn_content'
                                            onClick={() => setoption(0)}>
                                            <CustomButton
                                                outlined={option === 0 ? false : true}
                                                color='primary'
                                                text={MyData.learning.schoolTraining.btsSio.options[0].title}
                                                icon={option === 0 ? MyData.icons.btn_sio : null}
                                                width='160px'
                                                textDisplay='flex' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={12} className='school-training_item_btn'>
                                        <div
                                            className='school-training_item_btn_content'
                                            onClick={() => setoption(1)}>
                                            <CustomButton
                                                outlined={option === 1 ? false : true}
                                                color='primary'
                                                text={MyData.learning.schoolTraining.btsSio.options[1].title}
                                                icon={option === 1 ? MyData.icons.btn_sio : null}
                                                width='160px'
                                                textDisplay='flex' />
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={9}>
                                {option === 1 && (
                                    <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                                        <Typography className={['school-training_item_option', classes.borderColor, classes.text].join(' ')}>{
                                            MyData.learning.schoolTraining.btsSio.options[1].text
                                        }</Typography>
                                    </motion.div>
                                )}
                                {option === 0 && (
                                    <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                                        <Typography className={['school-training_item_option', classes.borderColor, classes.text].join(' ')}>{
                                            MyData.learning.schoolTraining.btsSio.options[0].text
                                        }</Typography>
                                    </motion.div>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Self learning */}
                <Grid container className='self-learning'>
                    <Title classSection='self-learning'>{MyData.learning.selfLearning.title}</Title>

                    {/* Tabs */}
                    <Grid item xs={12}>
                        <Tabs
                            value={tabValue}
                            // Error console {MuiColors} is expected
                            indicatorColor='primary'
                            className='self-learning_custom-tabs'
                            onChange={(event, newValue) => setTabValue(newValue)}>
                            <Tab label='Tous' value='all' className={tabValue === 'all' ? ['self-learning_custom-tabs_item', classes.active].join(' ') : 'self-learning_custom-tabs_item'} />

                            {/* Creating a array that contains a Set which gonna have elements from tag. Element is called only once foreach same tags item
                            exemple of array :
                                [
                                    item: 'react', // but there is two 'react' tags in items array from learning.
                                    item: 'c#',
                                    item: 'Php',
                                ].map() */}
                            {[...new Set(MyData.learning.selfLearning.items.map(item => item.tag))].map(tag => (
                                <Tab
                                    key={tag}
                                    label={tag}
                                    value={tag}
                                    className={tabValue === tag ? ['self-learning_custom-tabs_item', classes.active].join(' ') : 'self-learning_custom-tabs_item'} />
                            ))}
                        </Tabs>
                    </Grid>

                    {/* Learning */}
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            {MyData.learning.selfLearning.items.map((learning) => (
                                <React.Fragment key={learning.id}>
                                    {/* If current tabValue value (value returned by the current state value) is equal to learning.tag value or 'all' */}
                                    {tabValue === learning.tag || tabValue === 'all' ? (
                                        <Grid item xs={12}>
                                            <Grow in timeout={1000}>
                                                <a href={learning.link} target='_blank' style={{textDecoration: 'none'}} rel='noreferrer'>
                                                    <Card elevation={MyData.settings.cardElevation} className={'self-learning_custom-card'}>
                                                        <CardMedia className='self-learning_custom-card_img' image={learning.img} title={learning.title} />
                                                        <CardContent className='self-learning_custom-card_content'>
                                                            <Grid container>
                                                                <Grid item xs={12} className='self-learning_custom-card_content_item'>
                                                                    <Grid container>
                                                                        <Grid item xs={12} md={6}>
                                                                            <Typography className='self-learning_custom-card_content_item_title'>{learning.title}</Typography>
                                                                        </Grid>
                                                                        <Grid item xs={12} md={6}>
                                                                            <div className='self-learning_custom-card_content_item_progress'>
                                                                                <LinearWithValueLabel value={learning.progress} />
                                                                            </div>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                            <Typography variant='body2' className={['self-learning_custom-card_content_text', classes.text].join(' ')}>{learning.description}</Typography>
                                                            <div className='self-learning_custom-card_content_button'>
                                                                <div style={{ margin: 'auto 0' }} className={classes.text}>
                                                                    {learning.website}
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </a>
                                            </Grow>
                                        </Grid>
                                    ) : null}
                                </React.Fragment>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </motion.div>
            <SkillsArray open={openDialog} close={val => setOpenDialog(val)} isLogged={props.logStatus} />
        </Paper>
    )
}

export default Formations
