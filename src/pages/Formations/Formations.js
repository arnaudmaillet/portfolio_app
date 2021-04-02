import React, { useState } from 'react'
import { Grid, Tabs, Tab, Grow, Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import './Formations.scss'
import Title from '../../components/Title/Title'
import MyData from "./../../utils/data.js"
import LinearWithValueLabel from './../../components/LinearProgress/LinearWithValueLabel.js'
import CustomButton from "./../../components/Button/Button.js";

const Formations = () => {

    const [tabValue, setTabValue] = useState('all')

    return (
        <>
            {/* School training */}
            <Grid container className='school-training'>
                <Title classSection='school-training'>{MyData.learning.schoolTraining.title}</Title>
                <Grid item xs={12}>
                    <Typography className='school-training_item_title'>{MyData.learning.schoolTraining.btsSio.title}</Typography>
                    <div>
                        <Typography className='school-training_item_text'>{MyData.learning.schoolTraining.btsSio.text}</Typography>
                    </div>
                        {MyData.learning.schoolTraining.btsSio.options.map((option) => (
                            <div key={option.id} className='school-training_item_options'>
                                <CustomButton text={option.title} icon={MyData.icons.btn_sio} width='160px'/>
                            </div>
                        ))}   
                </Grid>
            </Grid>
            {/* Self learning */}
            <Grid container className='self-learning'>
                <Title classSection='self-learning'>{MyData.learning.selfLearning.title}</Title>

                {/* Tabs */}
                <Grid item xs={12}>
                    <Tabs
                        value={tabValue}
                        // Error console {MuiColors} is expected
                        indicatorColor='primary'
                        className='self-learning_custom-tabs'
                        onChange={(event, newValue) => setTabValue(newValue)}>
                        <Tab label='Tous' value='all' className={tabValue === 'all' ? 'self-learning_custom-tabs_item active' : 'self-learning_custom-tabs_item'} />

                        {/* Creating a array that contains a Set which gonna have elements from tag. Element is called only once foreach same tags item
                            exemple of array :
                                [
                                    item: 'react', // but there is two 'react' tags in items array from learning.
                                    item: 'c#',
                                    item: 'Php',
                                ].map() */}
                        {[...new Set(MyData.learning.selfLearning.items.map(item => item.tag))].map(tag => (
                            <Tab
                                key={tag}
                                label={tag}
                                value={tag}
                                className={tabValue === tag ? 'self-learning_custom-tabs_item active' : 'self-learning_custom-tabs_item'} />
                        ))}
                    </Tabs>
                </Grid>

                {/* Learning */}
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        {MyData.learning.selfLearning.items.map((learning) => (
                            <React.Fragment key={learning.id}>
                                {/* If current tabValue value (value returned by the current state value) is equal to learning.tag value or 'all' */}
                                {tabValue === learning.tag || tabValue === 'all' ? (
                                    <Grid item xs={12}>
                                        <Grow in timeout={1000}>
                                            <Card className='self-learning_custom-card'>
                                                <CardMedia className='self-learning_custom-card_img' image={learning.img} title={learning.title} />
                                                <CardContent className='self-learning_custom-card_content'>
                                                    <Grid container>
                                                        <Grid item xs={12} className='self-learning_custom-card_content_item'>
                                                            <Typography className='self-learning_custom-card_content_item_title'>{learning.title}</Typography>
                                                            <div className='self-learning_custom-card_content_item_progress'>
                                                                <LinearWithValueLabel value={learning.progress} />
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                    <Typography variant='body2' className='self-learning_custom-card_content_text'>{learning.description}</Typography>
                                                    <div className='self-learning_custom-card_content_button'>
                                                        <CustomButton
                                                            text='Voir' />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Grow>
                                    </Grid>
                                ) : null}
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Formations
