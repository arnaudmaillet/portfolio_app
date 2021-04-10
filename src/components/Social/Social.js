import React from 'react'
import { Grid, Tooltip } from '@material-ui/core';
import MyData from "./../../utils/data.js";
import { makeStyles } from "@material-ui/core";

import './Social.scss';

const style = makeStyles(theme =>({
    icon:{
        color: theme.palette.info.main,
        '&:hover' : {
            color: theme.palette.primary.main
        }
    }
}))

const Social = () => {

    const classes = style()

    return (
        <div className='social'>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        {Object.keys(MyData.socials).map((key) => (
                            <Grid item xs={3}>
                                <Tooltip arrow title={MyData.socials[key].text} placement="top">
                                    <a key={key} href={MyData.socials[key].link} target='_blank' rel="noreferrer" className={classes.icon}>{MyData.socials[key].icon}</a>
                                </Tooltip>                   
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}

export default Social
