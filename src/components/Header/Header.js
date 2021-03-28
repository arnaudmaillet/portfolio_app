import React from 'react'
import { Typography } from '@material-ui/core'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent';

import MyData from './../../utils/data.js'
import Timeline, { CustomTimelineSeparator } from './../Timeline/Timeline.js'

import './Header.scss'
import ImgProfil from './../../assets/img/profil.jpg'


const Header = () => {
    return (
        <div className='profile'>
            <div className='profile_name'>
                <Typography className='profile_name_text'>{MyData.profile.name}</Typography>
                <Typography className='profile_name_title'>{MyData.profile.title}</Typography>
            </div>
            <div className='profile_img'>
                <img src={ImgProfil} alt='picture' />
            </div>
            <div className='profile_information'>
                <Timeline icon={MyData.icon.header_timeline}>
                    <CustomTimelineItem 
                        title='Nom'
                        text={MyData.profile.name}/>
                    <CustomTimelineItem 
                        title='Age'
                        text={MyData.profile.age}/>
                    <CustomTimelineItem 
                        title='Email'
                        text={MyData.profile.email}/>
                    <CustomTimelineItem 
                        title='Adresse'
                        text={MyData.profile.adress}/>
                    
                </Timeline>
                <button>Mon CV</button>
            </div>
        </div>
    )
}

// Custom header's timeline section
const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator/>
        <TimelineContent>

            {/* Conditionnal if link display link else display text*/}
            {
                link ? (
                    <Typography>
                        <span>{title} :</span>
                        <a href={link} target='_blank'>{text}</a>
                    </Typography>
                ) : (
                    <Typography>
                        <span>{title} :</span> {text}
                    </Typography>
                )
                    
            }
        </TimelineContent>
    </TimelineItem>
)

export default Header