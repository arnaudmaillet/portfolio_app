import React from 'react'
import { Typography, makeStyles, Paper } from '@material-ui/core'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent';

import MyData from '../../utils/Data.js'
import MyTimeline, { CustomTimelineSeparator } from './../Timeline/Timeline.js'
import CustomButton from "./../Button/Button.js";

import './Header.scss'
import pdf from './../../assets/pdf/CV_ArnaudMAILLET.pdf'

const style = makeStyles(theme => ({
    text: {
        color: theme.palette.info.main
    },
    textDark: {
        color: theme.palette.info.dark
    }
}))

const Header = () => {
    const classes = style()
    return (
        <Paper elevation={MyData.settings.cardElevation}>
            <div className='profile'>
                <div className='profile_name'>
                    <Typography className={[classes.textDark, 'profile_name_text'].join(' ')}>{MyData.profile.name}</Typography>
                    <Typography className={[classes.text, 'profile_name_title'].join(' ')}>{MyData.profile.title}</Typography>
                </div>
                <div className='profile_img'>
                    <img src={MyData.profile.img} alt='picture' />
                </div>
                <div className='profile_information'>
                    <MyTimeline icon={MyData.icons.header_timeline}>
                        <CustomTimelineItem
                            title='Nom'
                            text={MyData.profile.name} />
                        <CustomTimelineItem
                            title='Age'
                            text={MyData.profile.age} />
                        <CustomTimelineItem
                            title='Email'
                            text={MyData.profile.email} />
                        <CustomTimelineItem
                            title='Adresse'
                            text={MyData.profile.adress} />
                    </MyTimeline>
                    <div className='profile_information_btn_CV'>
                        <CustomButton
                            color='primary'
                            isDownload
                            href={pdf}
                            text='Télécharger CV'
                            icon={MyData.icons.btn_download} />
                    </div>
                    <div className='profile_information_btn_contact'>
                        <CustomButton
                            color='primary'
                            text='Contactez-moi'
                            icon={MyData.icons.btn_contact} />
                    </div>
                </div>
            </div>
        </Paper>
    )
}

// Custom header's timeline section
const CustomTimelineItem = ({ title, text }) => {
    const classes = style()
    return (
        <TimelineItem>
            <CustomTimelineSeparator />
            <TimelineContent className='timeline_content'>
                <Typography className={['timeline_content_item', classes.text].join(' ')}>
                    <span className={classes.textDark}>{title} :</span> {text}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

export default Header
