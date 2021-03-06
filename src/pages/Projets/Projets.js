import React, { useState } from 'react'
import MyData from '../../utils/Data.js'
import { Grid, Typography, Tabs, Tab, Card, CardActionArea, CardMedia, CardContent, Grow, Dialog, DialogTitle, DialogContent, DialogActions, Paper, makeStyles, Tooltip } from '@material-ui/core'
import Title from '../../components/Title/Title.js'
import { motion } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import './Projets.scss'

const style = makeStyles(theme => ({
    color: {
        color: theme.palette.info.main,
        "&:hover": {
            color: theme.palette.primary.main,
        },
    },
    text: {
        color: theme.palette.info.main
    },
    active: {
        color: theme.palette.primary.main
    },
    backgroundColor: {
        backgroundColor: theme.palette.primary.main
    },
}))

const Projets = () => {

    const [tabValue, setTabValue] = useState('all')
    const [projectDialog, setProjectDialog] = useState(null)
    const classes = style();

    return (
        <Paper elevation={MyData.settings.cardElevation}>
            <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.2 }}>
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
                            <Tab label='Tous' value='all' className={tabValue === 'all' ? ['projects_custom-tabs_item', classes.active].join(' ') : 'projects_custom-tabs_item'} />

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
                                    className={tabValue === tag ? ['projects_custom-tabs_item', classes.active].join(' ') : 'projects_custom-tabs_item'} />
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
                                                <Card elevation={MyData.settings.cardElevation} className='projects_custom-card' onClick={() => setProjectDialog(project)}>
                                                    <CardActionArea>
                                                        <CardMedia className='projects_custom-card_img' image={project.img[0]} title={project.title} />
                                                        <CardContent>
                                                            <Typography className='projects_custom-card_title'>{project.title}</Typography>
                                                            <Typography variant='body2' className={['projects_custom-card_text', classes.text].join(' ')}>{project.description}</Typography>
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
                    {projectDialog ? (
                        <Dialog
                        fullWidth
                        maxWidth='sm'
                        open={true}
                        onClose={() => setProjectDialog(null)}>
                            <Carousel showThumbs={false} autoPlay infiniteLoop >
                                {projectDialog?.img?.map((img, i) => (
                                    <img key={i} src={img} alt='' className='projects_dialog-image'></img>
                                ))}
                            </Carousel>

                        <DialogActions className='projects_dialog-action'>
                            <div style={{marginLeft: '10px'}} className={['projects_dialog-action_icon', classes.color].join(' ')} onClick={() => setProjectDialog(null)}>
                                {MyData.icons.dialog_close}
                            </div>
                            <div>
                                {projectDialog?.links?.map(link => (
                                    <a href={link.link} rel="noreferrer" target='_blank' key={link.id} className={['projects_dialog-action_icon', classes.color].join(' ')}>
                                        <Tooltip arrow placement="bottom" title={link.text}>
                                            {link.icon}
                                        </Tooltip>
                                    </a>
                                ))}
                            </div>
                        </DialogActions>
                        <DialogTitle className={['projects_dialog-title', classes.backgroundColor].join(' ')}>
                            <Typography className='projects_dialog-title_text'>
                                {projectDialog.title}
                            </Typography>
                        </DialogTitle>
                        <DialogContent className='projects_dialog-text'>
                            <Typography className={['projects_dialog-text_content', classes.text].join(' ')}>{projectDialog.text}</Typography>
                        </DialogContent>
                    </Dialog>
                    ) : <div></div>}
                </Grid>
            </motion.div>
        </Paper>
    )
}

export default Projets
