import React, { useState, useEffect } from 'react'
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, CircularProgress } from '@material-ui/core';
import './SkillsArray.scss'
import Axios from 'axios'

const style = makeStyles({
    table: {
        minWidth: 650,
    },
});



const SkillsArray = () => {

    const classes = style()
    const [data, setData] = useState(null)
    const [projects, setProjects] = useState(null)

    useEffect(() => {
        Axios.get('http://localhost:3003/skillsArray').then((response) => {
            response ? setData(response.data.data) : console.log('error');
        })
        Axios.get('http://localhost:3003/projects').then((response) => {
            response ? setProjects(response.data.data) : console.log('error');
        })
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table" size="small">
                {data ? (
                    <React.Fragment>
                        <TableHead>
                            <TableRow>
                                <TableCell>Domaine</TableCell>
                                <TableCell>Processus</TableCell>
                                <TableCell>Activité</TableCell>
                                {projects && projects.map((item) => (
                                    <TableCell key={item} width={120} >{item.libelle}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, i) => (
                                <TableRow key={i} hover role="checkbox">
                                    <TableCell component="th" scope="row">
                                        {item.libDom}
                                    </TableCell>
                                    <TableCell>{item.libProc}</TableCell>
                                    <TableCell>{item.libAct}</TableCell>
                                    {projects && projects.map((item) => (
                                        <TableCell className='checkbox' key={item}>
                                            <Checkbox />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </React.Fragment>
                ) : <TableBody></TableBody>}
            </Table>
        </TableContainer>
    )
}

export default SkillsArray
