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
                        url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2094.7675155657794!2d2.296521506320683!3d49.89343022524075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e78438b0abd7c3%3A0xff54500fc939881f!2zTHljw6llIFByaXbDqSBTYWludCBSw6ltaQ!5e0!3m2!1sfr!2sfr!4v1617489467835!5m2!1sfr!2sfr" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Map
