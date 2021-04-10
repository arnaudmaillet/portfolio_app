import React, { useState } from 'react'
import MyData from '../../utils/Data.js'
import { Grid, Typography, Tabs, Tab, Card, CardActionArea, CardMedia, CardContent, Grow, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import Title from '../../components/Title/Title.js'

import './Projets.scss'

const Projets = () => {

    const [tabValue, setTabValue] = useState('all')
    const [projectDialog, setProjectDialog] = useState(false)

    return (
        <Grid container className='projects'>
            <Title classSection='projects'>{MyData.projects.title}</Title>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs
                    value={tabValue}
                    // Error console {MuiColors} is expected
                    indicatorColor='primary'
                    className='projects_custom-tabs'
                    onChange={(event, newValue) => setTabValue(newValue)}>
                    <Tab label='Tous' value='all' className={tabValue === 'all' ? 'projects_custom-tabs_item active' : 'projects_custom-tabs_item'} />

                    {/* Creating a array that contains a Set which gonna have elements from tag. Element is called only once foreach same tags item
                            exemple of array :
                                [
                                    item: 'react', // but there is two 'react' tags in items array from projects.
                                    item: 'c#',
                                    item: 'Php',
                                ].map() */}
                    {[...new Set(MyData.projects.items.map(item => item.tag))].map(tag => (
                        <Tab
                            key={tag}
                            label={tag}
                            value={tag}
                            className={tabValue === tag ? 'projects_custom-tabs_item active' : 'projects_custom-tabs_item'} />
                    ))}
                </Tabs>
            </Grid>

            {/* Projects */}
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {MyData.projects.items.map((project) => (
                        <React.Fragment key={project.id}>
                            {/* If current tabValue value (value returned by the current state value) is equal to project.tag value or 'all' */}
                            {tabValue === project.tag || tabValue === 'all' ? (
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <Grow in timeout={1000}>
                                        {/* An object is passed to the setProjectDialog function */}
                                        <Card className='projects_custom-card' onClick={() => setProjectDialog(project)}>
                                            <CardActionArea>
                                                <CardMedia className='projects_custom-card_img' image={project.img} title={project.title} />
                                                <CardContent>
                                                    <Typography className='projects_custom-card_title'>{project.title}</Typography>
                                                    <Typography variant='body2' className='projects_custom-card_text'>{project.description}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            ) : null}
                        </React.Fragment>
                    ))}
                </Grid>
            </Grid>

            {/* generating dialog(modal like) */}
            <Dialog
                fullWidth
                maxWidth='sm'
                open={projectDialog}
                onClose={() => setProjectDialog(false)}>
                <img src={projectDialog.img} alt='' className='projects_dialog-image'></img>
                <DialogActions className='projects_dialog-action'>
                    {projectDialog?.links?.map(link => (
                        <a href={link.link} rel="noreferrer" target='_blank' key={link.id} className='projects_dialog-action_icon'>
                            {link.icon}
                        </a>
                    ))}
                </DialogActions>
                <DialogTitle className='projects_dialog-title'>
                    <Typography className='projects_dialog-title_text'>
                        {projectDialog.title}
                    </Typography>
                </DialogTitle>
                <DialogContent className='projects_dialog-text'>
                    <Typography className='projects_dialog-text_content'>{projectDialog.text}</Typography>
                </DialogContent>
            </Dialog>
        </Grid>
    )
}

export default Projets
