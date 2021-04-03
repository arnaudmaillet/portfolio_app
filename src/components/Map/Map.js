import React from 'react'
import { Grid } from '@material-ui/core';
import MyData from "./../../utils/data.js";
import Iframe from 'react-iframe';

import './Map.scss'

const Map = () => {
    return (
        <div className='map'>
            <Grid container>
                <Grid item xs={12}>
                    <Iframe
                        width='100%'
                        height='100%'
                        url={MyData.profile.map}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Map
