import React, { Children } from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from "@material-ui/core";

import './Timeline.scss'

const MyTimeline = ({ title, icon, children }) => {
    return (
        <Timeline className='timeline'>

            <TimelineItem className='timeline_header'>
                <TimelineSeparator>
                    <TimelineDot className="timeline_header_dot">{icon}</TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography
                        variant='h6'
                        className='timeline_header_text'>
                        {title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            {children}
        </Timeline>
    )
}

export const CustomTimelineSeparator = () => (
    <TimelineSeparator className='timeline_separator_padding'>
        <TimelineDot variant='outlined' className='timeline_dot' />
        <TimelineConnector />
    </TimelineSeparator>
)

export default MyTimeline
