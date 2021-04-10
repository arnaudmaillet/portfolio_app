import React, { useState } from 'react'
import { Grid, Tabs, Tab, Grow, Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import './Formations.scss'
import Title from '../../components/Title/Title'
import MyData from "../../utils/Data.js"
import LinearWithValueLabel from './../../components/LinearProgress/LinearWithValueLabel.js'
import CustomButton from "./../../components/Button/Button.js";

const Formations = () => {

    const [tabValue, setTabValue] = useState('all')

    const [option, setoption] = useState(0)


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
                    <Grid container>
                        <Grid item xs={12} md={3} style={{ marginTop: '22px' }}>
                            <Grid container>
                                <Grid item xs={6} md={12} className='school-training_item_btn'>
                                    <div
                                        className='school-training_item_btn_content'
                                        onClick={() => setoption(0)}>
                                        <CustomButton
                                            text={MyData.learning.schoolTraining.btsSio.options[0].title}
                                            icon={option === 0 ? MyData.icons.btn_sio : null}
                                            width='160px'
                                            textDisplay='flex' />
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={12} className='school-training_item_btn'>
                                    <div
                                        className='school-training_item_btn_content'
                                        onClick={() => setoption(1)}>
                                        <CustomButton
                                            text={MyData.learning.schoolTraining.btsSio.options[1].title}
                                            icon={option === 1 ? MyData.icons.btn_sio : null}
                                            width='160px'
                                            textDisplay='flex' />
                                    </div>
                                </Grid>
                            </Grid>

                            {/* {MyData.learning.schoolTraining.btsSio.options.map((item) => (
                            <div 
                                key={item.id} 
                                className={option === 1 ? 'school-training_item_btn' : 'school-training_item_btn_active'}
                                onClick={()=> {
                                    if(item.id !== option){
                                        setoption(item.id)
                                    }
                                }}>
                                <CustomButton 
                                    text={item.title} 
                                    icon={MyData.icons.btn_sio} 
                                    width='160px'/>
                            </div>
                        ))} */}
                        </Grid>
                        <Grid item xs={12} md={9}>
                            {option === 1 ? (
                                <Typography className='school-training_item_option'>{MyData.learning.schoolTraining.btsSio.options[0].text}</Typography>
                            ) : (
                                <Typography className='school-training_item_option'>{MyData.learning.schoolTraining.btsSio.options[1].text}</Typography>
                            )}
                        </Grid>
                    </Grid>
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
                                                            textDisplay='flex'
                                                            justifyText='center'
                                                            href={learning.link}
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
