import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography, Box } from '@material-ui/core'
import './LinearWithValueLabel.scss'




const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 13,
    borderRadius: 3,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 3,
    backgroundColor: 'primary',
  },
}))(LinearProgress);


function LinearProgressWithLabel(props) {
  return (   
    <Box minWidth={35} className='linearProgressWithLabel'>
      <Typography variant="body2" color="primary" className='linearProgressWithLabel_text'>{`${Math.round(
        props.value,
      )}%`}</Typography>
    </Box>
  );
}

export default function CustomizedProgressBars({value}) {
  return (
    <div className='progress-bars'> 
        <BorderLinearProgress variant="determinate" value={value} />
        <LinearProgressWithLabel value={value}/>
    </div>
  );
}