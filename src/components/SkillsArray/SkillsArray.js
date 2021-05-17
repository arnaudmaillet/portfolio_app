import React, { useState, useEffect } from 'react'
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, CircularProgress, IconButton, Collapse, Box, Typography } from '@material-ui/core';
import './SkillsArray.scss'
import Axios from 'axios'
import MyData from '../../utils/Data.js'


const SkillsArray = () => {

    const [data, setData] = useState(null)
    const [projects, setProjects] = useState(null)


    useEffect(() => {
        Axios.get('http://localhost:3003/skillsArray').then((response) => {
            response ? array(response.data.data) : console.log('error');
        })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:3003/projects').then((response) => {
            response ? setProjects(response.data.data) : console.log('error');
        })
    }, [])


    const handleClick = (id) => {
        // setChecked(!checked);
        // !checked ? console.log(id) : console.log('error');
    }

    const array = (data) => {
        let result = []
        let p = 0;
        let d = 0;
        let a = 0;
        for (let i in data) {
            if (result.some(element => element.numProc === data[i].numProc) === false) {
                d = 0;
                result.push({ numProc: data[i].numProc, libProc: data[i].libProc });
                result[p].domaines = [{ numDom: data[i].numDom, libDom: data[i].libDom }];
                result[p].domaines[d].activites = [{ numAct: data[i].numAct, libAct: data[i].libAct }];
                p = p + 1;
            } else {
                if (result[p - 1].domaines[d].numDom === data[i].numDom) {
                    if (result[p - 1].domaines[d].activites[a] === data[i].numAct) {
                        return
                    } else {
                        result[p - 1].domaines[d].activites.push({ numAct: data[i].numAct, libAct: data[i].libAct });
                        a = a + 1;
                    }
                } else {
                    a = 0;
                    d = d + 1;
                    result[p - 1].domaines.push({ numDom: data[i].numDom, libDom: data[i].libDom });
                    result[p - 1].domaines[d].activites = [{ numAct: data[i].numAct, libAct: data[i].libAct }];
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
                    <TableCell width='50px'>
                        <IconButton color='primary' aria-label="domaines" size="small" onClick={() => setOpen(!open)}>
                            {open ? MyData.icons.array_row_close : MyData.icons.array_row_open}
                        </IconButton>
                    </TableCell>
                    <TableCell>{props.proc.numProc}. {props.proc.libProc}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} colSpan={20}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Table size='small'>
                                <TableBody>
                                    {props.proc.domaines.map((dom) => (
                                        <Domaine key={dom.numDom} proc={props.proc} dom={dom}/>
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
        //console.log(props.status);
        return (
            <>
                <TableRow>
                    <TableCell width='50px'>
                        <IconButton aria-label="activites" size="small" onClick={() => setOpen(!open)}>
                            {open ? MyData.icons.array_row_close : MyData.icons.array_row_open}
                        </IconButton>
                    </TableCell>
                    <TableCell>{props.proc.numProc}.{props.dom.numDom}. {props.dom.libDom}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} colSpan={20}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Table size='small'>
                                <TableBody>
                                    {props.dom.activites.map((act) => (
                                        <TableRow key={act.numAct}>
                                            <TableCell style={{ border: 'none' }} width='70px' />
                                            <TableCell>{props.proc.numProc}.{props.dom.numDom}.{act.numAct}. {act.libAct}</TableCell>
                                            <TableCell width='400px'>
                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                                    {projects && projects.map((proj) => (
                                                        <div key={proj.id} style={{ width: '80px', textAlign: 'center'}}>
                                                            <Checkbox color='primary'></Checkbox>
                                                        </div>
                                                    ))}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </>
        )
    }


    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell />
                        <TableCell width='400px'>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                {projects && projects.map((proj) => (
                                    <Typography key={proj.id} style={{ width: '80px', textAlign: 'center'}}>{proj.libelle}</Typography>
                                ))}
                            </div>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data ?
                        data.map((proc) => (
                            <Processus key={proc.numProc} proc={proc} />
                        ))
                        :
                        <TableRow></TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SkillsArray
