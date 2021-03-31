import React, {useState} from 'react'
import './Projets.scss'
import MyData from './../../utils/data.js'
import { Grid, Typography, Tabs, Tab } from '@material-ui/core'
import Title from '../../components/Title/Title.js'

const Projets = () => {
    const [tabValue, setTabValue] = useState('all')
    return (
        <>
            <Grid container className='projects'>
                <Title classSection='projects'>{MyData.projects.title}</Title>

                {/* Tabs */}
                <Grid item xs={12}>
                    <Tabs
                        value={tabValue}
                        indicatorColor='white'
                        className='projects_custom-tabs'
                        onChange={(event, newValue) => setTabValue(newValue)}>
                            <Tab label='Tous' value='all' className={tabValue == 'all' ? 'projects_custom-tabs_item active' : 'projects_custom-tabs_item'}/>

                            // Creating a array that contains a Set which gonna have elements from tag. Element is called only once foreach same tags item
                            // exemple of array : 
                                /* [
                                        item: 'react', // but there is two 'react' tags in items array from projects.
                                        item: 'c#', 
                                        item: 'Php',
                                    ].map()*/
                            {[...new Set(MyData.projects.items.map(item => item.tag))].map(tag => (
                                <Tab 
                                    label={tag} 
                                    value={tag}
                                    className={tabValue == 'all' ? 'projects_custom-tabs_item active' : 'projects_custom-tabs_item'}/>
                            ))}
                        </Tabs>
                </Grid>
            </Grid>
        </>
    )
}

export default Projets
