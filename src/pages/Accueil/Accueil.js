import React from 'react'
import { Grid, Icon, Paper, Typography } from '@material-ui/core'
import MyData from './../../utils/data.js'
import Title from './../../components/Title/Title.js'
import MyTimeline, { CustomTimelineSeparator } from './../../components/Timeline/Timeline.js'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'

import './Accueil.scss'
import TimelineDot from '@material-ui/lab/TimelineDot'


const Accueil = () => {
    return (
        <>
            {/* About me */}
            <Grid container className='about-me'>
                <Title classSection='about-me'>{MyData.home.about.title}</Title>
                <Grid item xs={12}>
                    <Typography className='about-me_text'>{MyData.home.about.text}</Typography>
                </Grid>
            </Grid>

            {/* History */}
            <Grid container className='history'>
                <Title classSection='history'>{MyData.home.history.title}</Title>
                <Grid item xs={12}>
                    <Grid container>

                        {/* Professional */}
                        <Grid item sm={12} md={6}>
                            <MyTimeline title='Parcours en entreprise' icon={MyData.icons.work_timeline}>
                                {MyData.home.history.work.map((work) => (
                                    <TimelineItem key={work.id}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent>
                                            <Typography className='history_item-title'>{work.title}</Typography>
                                            <Typography variant='caption' className='history_item-date'>{work.date}</Typography>
                                            <Typography variant='body2' className='history_item-text' color='primary'>{work.text}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </MyTimeline>
                        </Grid>

                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <MyTimeline title='Parcours scolaire' icon={MyData.icons.education_timeline}>
                                {MyData.home.history.education.map((education) => (
                                    <TimelineItem key={education.id}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent>
                                            <Typography className='history_item-title'>{education.title}</Typography>
                                            <Typography variant='caption' className='history_item-date'>{education.date}</Typography>
                                            <Typography variant='body2' className='history_item-text'>{education.text}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </MyTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Services */}
            <Grid container className='services'>
                <Title classSection='services'>{MyData.home.services.title}</Title>
                <Grid item xs={12}>
                    <Grid container spacing={3} justify='space-around'>
                        {MyData.home.services.items.map((item) => (
                            <Grid item xs={12} sm={6} md={3} key={item.id}>
                                <div className='services_item'>
                                    <Icon className='services_item-icon'>{item.icon}</Icon>
                                    <Typography className='services_item-title' variant='h6'>{item.title}</Typography>
                                    <Typography className='services_item-text' variant='body2'>{item.text}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* Skills */}
            <Grid
                container
                className='skills'>
                <Grid item xs={12}>
                    <Grid container justify='space-between' spacing={3}>
                        {MyData.home.skills.items.map((item) => (
                            <Grid item xs={12} sm={6} md={3} key={item.id}>
                                <Paper elevation={0} className='skills_section'>
                                    <Typography variant='h6' className='skills_section_item-title'>{item.title}</Typography>
                                    {item.elements.map((element) => (
                                        <Typography variant='body2' className='skills_section_item-element' key={element}>
                                            <TimelineDot variant={'outlined'} />
                                            {element}
                                        </Typography>
                                    ))}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Accueil
