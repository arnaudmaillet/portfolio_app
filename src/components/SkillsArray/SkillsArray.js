import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, IconButton, Collapse, Typography, Dialog, DialogContent, Button, Toolbar, AppBar, makeStyles, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import './SkillsArray.scss'
import Axios from 'axios'
import MyData from '../../utils/Data.js'


const style = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    primaryBg: {
        backgroundColor: theme.palette.primary.main
    }
}))

const SkillsArray = (props) => {
    const classes = style()
    const [data, setData] = useState(null)
    const [projects, setProjects] = useState(null)
    const [valide, setValide] = useState(null)
    const [loginStatus, setLoginStatus] = useState(false)

    const [msg, setMsg] = useState('')
    const [alertOpen, setAlertOpen] = useState(false)
    const [alertType, setAlertType] = useState('')

    const handleSave = () => {
        Axios.post("http://152.228.135.248:3003/setSkills", {
            skills: valide
        }).then((response) => {
            if (response) {
                setMsg(response.data.message)
                setAlertType('success')
                setAlertOpen(true)
            } else {
                setMsg(response.data.err)
                setAlertType('error')
                setAlertOpen(true)
            }
        })
    }

    useEffect(() => {
        Axios.get('http://152.228.135.248:3003/skillsArray').then((response) => {
            response ? array(response.data.data) : console.log('error');
        })
    }, [])

    useEffect(() => {
        Axios.get('http://152.228.135.248:3003/projects').then((response) => {
            response ? setProjects(response.data.data) : console.log('error');
        })
    }, [])

    useEffect(() => {
        Axios.get('http://152.228.135.248:3003/estValide').then((response) => {
            response ? setValide(response.data.data) : console.log('error');
        })
    }, [])

    useEffect(() => {
        Axios.get('http://152.228.135.248:3003/login').then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus(true)
            }
        })
    }, [])
    const array = (data) => {
        let result = []
        let p = 0;
        let d = 0;
        let a = 0;
        let c = 0;
        for (let i in data) {
            if (result.some(element => element.numProc === data[i].numProc) === false) {
                c = 0;
                a = 0;
                d = 0;
                result.push({ numProc: data[i].numProc, libProc: data[i].libProc });
                result[p].domaines = [{ numDom: data[i].numDom, libDom: data[i].libDom }];
                result[p].domaines[d].activites = [{ numAct: data[i].numAct, libAct: data[i].libAct }];
                result[p].domaines[d].activites[a].competences = [{ numComp: data[i].numComp, libComp: data[i].libComp }]
                p = p + 1;
            } else {
                if (result[p - 1].domaines[d].numDom === data[i].numDom) {
                    if (result[p - 1].domaines[d].activites[a].numAct === data[i].numAct) {
                        if (result[p - 1].domaines[d].activites[a].competences[c].numComp === data[i].numComp) {
                            return
                        } else {
                            result[p - 1].domaines[d].activites[a].competences.push({ numComp: data[i].numComp, libComp: data[i].libComp })
                            c = c + 1;
                        }
                    } else {
                        c = 0;
                        a = a + 1;
                        result[p - 1].domaines[d].activites.push({ numAct: data[i].numAct, libAct: data[i].libAct });
                        result[p - 1].domaines[d].activites[a].competences = [{ numComp: data[i].numComp, libComp: data[i].libComp }]
                    }
                } else {
                    c = 0;
                    a = 0;
                    d = d + 1;
                    result[p - 1].domaines.push({ numDom: data[i].numDom, libDom: data[i].libDom });
                    result[p - 1].domaines[d].activites = [{ numAct: data[i].numAct, libAct: data[i].libAct }];
                    result[p - 1].domaines[d].activites[a].competences = [{ numComp: data[i].numComp, libComp: data[i].libComp }]
                }
            }
        }
        setData(result)
    }


    const Processus = (props) => {
        const [open, setOpen] = useState(true)
        return (
            <>
                <TableRow>
                    <TableCell style={{ width: '5px' }} className={classes.primaryBg}>
                        <IconButton aria-label="domaines" size="small" onClick={() => setOpen(!open)}>
                            {open ? MyData.icons.array_row_close : MyData.icons.array_row_open}
                        </IconButton>
                    </TableCell>
                    <TableCell>{props.proc.numProc}. {props.proc.libProc}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={20}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Table size='small'>
                                <TableBody>
                                    {props.proc.domaines.map((dom) => (
                                        <Domaine key={dom.numDom} proc={props.proc} dom={dom} isLogged={props.isLogged} />
                                    ))}
                                </TableBody>
                            </Table>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </>
        )
    }

    const Domaine = (props) => {
        const [open, setOpen] = useState(true)
        return (
            <>
                <TableRow>
                    <TableCell width='50px'>
                        <IconButton color='primary' aria-label="activites" size="small" onClick={() => setOpen(!open)}>
                            {open ? MyData.icons.array_row_close : MyData.icons.array_row_open}
                        </IconButton>
                    </TableCell>
                    <TableCell>{props.proc.numProc}.{props.dom.numDom}. {props.dom.libDom}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ padding: '0 0 0 10px'  }} colSpan={20}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Table size='small'>
                                <TableBody>
                                    {props.dom.activites.map((act) => (
                                        <Activite key={act.numAct} proc={props.proc} dom={props.dom} act={act} isLogged={props.isLogged} />
                                    ))}
                                </TableBody>
                            </Table>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </>
        )
    }

    const Activite = (props) => {
        const [open, setOpen] = useState(true)
        return (
            <>
                <TableRow>
                    <TableCell width='50px'>
                        <IconButton color='primary' aria-label="competences" size="small" onClick={() => setOpen(!open)}>
                            {open ? MyData.icons.array_row_close : MyData.icons.array_row_open}
                        </IconButton>
                    </TableCell>
                    <TableCell>{props.proc.numProc}.{props.dom.numDom}.{props.act.numAct}. {props.act.libAct}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ padding: '0 0 0 10px' }} colSpan={20}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Table size='small'>
                                <TableBody>
                                    {props.act.competences.map((comp) => (
                                        <Competence key={comp.numComp} proc={props.proc} dom={props.dom} act={props.act} comp={comp} isLogged={props.isLogged}/>
                                    ))}
                                </TableBody>
                            </Table>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </>
        )
    }

    const Competence = (props) => {
        return (
            <TableRow>
                <TableCell style={{ border: 'none' }} width='70px' />
                <TableCell>{props.proc.numProc}.{props.dom.numDom}.{props.act.numAct}.{props.comp.numComp}. {props.comp.libComp}</TableCell>
                <TableCell width='400px'>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            {projects && projects.map((proj) => (
                                <CustomCheckbox key={proj.id} proc={props.proc} dom={props.dom} act={props.act} comp={props.comp} proj={proj} isLogged={props.isLogged}/>
                            ))}
                        </div>
                    </TableCell>
            </TableRow>
        )
    }

    const CustomCheckbox = (props) => {

        let initValue;
        if (valide && valide.some(element => element.numProc === props.proc.numProc && element.numDom === props.dom.numDom && element.numAct === props.act.numAct && element.numComp === props.comp.numComp && element.idProjet === props.proj.id) === true) {
            initValue = true
        } else {
            initValue = false
        }

        const [checked, setChecked] = useState(initValue)


        const handleClick = () => {
            if (checked === true) {
                setValide(valide.filter(element => element.numProc !== props.proc.numProc || element.numDom !== props.dom.numDom || element.numAct !== props.act.numAct || element.numComp !== props.comp.numComp || element.idProjet !== props.proj.id))
                setChecked(false)
            } else {
                setValide([...valide, { numProc: props.proc.numProc, numDom: props.dom.numDom, numAct: props.act.numAct, numComp: props.comp.numComp, idProjet: props.proj.id, libelle: props.proj.libelle }])
                setChecked(true)
            }
        }

        return (
            <div style={{ width: '80px', textAlign: 'center' }}>
                {valide && valide.some(element => element.numProc === props.proc.numProc && element.numDom === props.dom.numDom && element.numAct === props.act.numAct && element.numComp === props.comp.numComp && element.idProjet === props.proj.id) === true ?
                    <Checkbox color='primary' disabled={props.isLogged || loginStatus ? false : true} onClick={handleClick} checked></Checkbox>
                    :
                    <Checkbox color='primary' disabled={props.isLogged || loginStatus ? false : true} onClick={handleClick}></Checkbox>
                }
            </div>
        )
    }

    return (
        <>

            <Dialog
                fullScreen
                open={props.open}
                onClose={() => props.close(false)}
                aria-labelledby="skillsDialog-title"
                aria-describedby="skillsDialog-description"
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={() => props.close(false)} aria-label="close">
                            {MyData.icons.dialog_close}
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {MyData.skillsArray.title}
                        </Typography>
                        {props.isLogged || loginStatus ? (
                            <Button autoFocus color="inherit" onClick={handleSave}>
                                Enregistrer
                            </Button>
                        ) : (
                            <div></div>
                        )}
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell width='400px'>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                            {projects && projects.map((proj) => (
                                                <Typography key={proj.id} style={{ width: '80px', textAlign: 'center' }}>{proj.libelle}</Typography>
                                            ))}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data ?
                                    data.map((proc) => (
                                        <Processus key={proc.numProc} proc={proc} isLogged={props.isLogged} />
                                    ))
                                    :
                                    <TableRow></TableRow>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <Snackbar open={alertOpen} autoHideDuration={6000} onClose={() => setAlertOpen(false)}>
                    <Alert onClose={() => setAlertOpen(false)} severity={alertType === 'success' ? 'success' : 'error'}>
                        {msg}
                    </Alert>
                </Snackbar>
            </Dialog>
        </>
    )
}

export default SkillsArray
