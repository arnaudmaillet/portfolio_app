import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography, Box } from '@material-ui/core'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
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


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function LinearProgressWithLabel(props) {
  return (   
    <Box minWidth={35}>
      <Typography variant="body2" color="textSecondary">{`${Math.round(
        props.value,
      )}%`}</Typography>
    </Box>
  );
}

export default function CustomizedProgressBars({value}) {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
        <BorderLinearProgress variant="determinate" value={value} />
        <LinearProgressWithLabel value={value}/> 
    </div>
  );
}