import React from 'react'
import { Typography } from '@material-ui/core'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent';

import MyData from './../../utils/data.js'
import MyTimeline, { CustomTimelineSeparator } from './../Timeline/Timeline.js'
import CustomButton from "./../Button/Button.js";

import './Header.scss'
import pdf from './../../assets/pdf/CV_ArnaudMAILLET.pdf'

const Header = () => {
    return (
        <div className='profile'>
            <div className='profile_name'>
                <Typography className='profile_name_text'>{MyData.profile.name}</Typography>
                <Typography className='profile_name_title'>{MyData.profile.title}</Typography>
            </div>
            <div className='profile_img'>
                <img src={MyData.profile.img} alt='picture' />
            </div>
            <div className='profile_information'>
                <MyTimeline icon={MyData.icons.header_timeline}>
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

                    {/* Foreach social object in array, define key as social object */}
                    {/* {Object.keys(MyData.socials).map((key) => (
                        <CustomTimelineItem 
                            key = {key}
                            text={MyData.socials[key].text} 
                            link={MyData.socials[key].link}/>
                    ))} */}
                </MyTimeline>
                <div className='profile_information_btn_container'>
                    <CustomButton
                        isDownload = 'true'
                        href={pdf} 
                        text='Télécharger CV'
                        icon={MyData.icons.btn_download}/>
                </div>
            </div>
        </div>
    )
}

// Custom header's timeline section
const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator/>
        <TimelineContent className='timeline_content'>

            {/* Conditionnal if link display link else display text */}
            {
                link ? (
                    <Typography className='timeline_content_item'>
                        <span>{title}</span>
                        <a 
                            
                            href={link} 
                            target='_blank'>{text}</a>
                    </Typography>
                ) : (
                    <Typography className='timeline_content_item'>
                        <span>{title} :</span> {text}
                    </Typography>
                )
                    
            }
        </TimelineContent>
    </TimelineItem>
)

export default Header
