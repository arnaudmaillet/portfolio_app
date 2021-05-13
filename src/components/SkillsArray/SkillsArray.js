import React from 'react'
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Grid } from '@material-ui/core';
import './SkillsArray.scss'

const style = makeStyles({
    table: {
        minWidth: 650,
    },
});



const SkillsArray = (props) => {

    const classes = style()

    return (
        <TableContainer component={Paper}>
            {console.log(props.array)}
            <Table className={classes.table} aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Processus</TableCell>
                        <TableCell>Domaine</TableCell>
                        <TableCell>Activité</TableCell>
                        <TableCell>PPE1</TableCell>
                        <TableCell>PPE2</TableCell>
                        <TableCell>PPE3</TableCell>
                        <TableCell>PPE4</TableCell>
                        <TableCell>PPE5</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.array.map((item, i) => (
                        <TableRow key={i} hover role="checkbox">
                            <TableCell component="th" scope="row">
                                {item.libProc}
                            </TableCell>
                            <TableCell>{item.libDom}</TableCell>
                            <TableCell>{item.libAct}</TableCell>
                            <TableCell className='checkbox'>
                                <Checkbox />
                            </TableCell>
                            <TableCell className='checkbox'>
                                <Checkbox />
                            </TableCell>
                            <TableCell className='checkbox'>
                                <Checkbox />
                            </TableCell>
                            <TableCell className='checkbox'>
                                <Checkbox />
                            </TableCell>
                            <TableCell className='checkbox'>
                                <Checkbox />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SkillsArray
