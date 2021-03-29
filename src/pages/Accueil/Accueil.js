import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import MyData from './../../utils/data.js'
import Title from './../../components/Title/Title.js'
import MyTimeline, { CustomTimelineSeparator } from './../../components/Timeline/Timeline.js'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'

import './Accueil.scss'


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
                            <MyTimeline title='Parcours en Entreprise' icon={MyData.icons.work_timeline}>
                                {MyData.home.history.work.map((work) => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent>
                                            <Typography className='history_item-title'>{work.title}</Typography>
                                            <Typography variant='caption' className='history_item-date'>{work.date}</Typography>
                                            <Typography variant='body2' className='history_item-text'>{work.text}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </MyTimeline>
                        </Grid>

                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <MyTimeline title='Parcours en Entreprise' icon={MyData.icons.education_timeline}>
                                {MyData.home.history.education.map((education) => (
                                    <TimelineItem>
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

            {/* News */}
            <Grid container className='section'></Grid>
        </>
    )
}

export default Accueil
