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
    const [checked, setChecked] = useState(false)


    useEffect(() => {
        Axios.get('http://localhost:3003/skillsArray').then((response) => {
            response ? array(response.data.data) : console.log('error');
        })
        Axios.get('http://localhost:3003/projects').then((response) => {
            response ? setProjects(response.data.data) : console.log('error');
        })
    }, [])

    const handleClick = (id) => {
        // setChecked(!checked);
        // !checked ? console.log(id) : console.log('error');
    }

    const array = (data) => {
        let result = [];
        let p = 0;
        let d = 0;
        let a = 0;
        for (let i in data){
            if (result.some(element => element.numProc === data[i].numProc) === false){
                d = 0;
                result.push({numProc : data[i].numProc, libProc : data[i].libProc});
                result[p].domaines = [{numDom : data[i].numDom, libDom : data[i].libDom}];
                result[p].domaines[d].activites = [{numAct : data[i].numAct, libAct : data[i].libAct}];
                p = p + 1;
            } else {
                if(result[p-1].domaines[d].numDom === data[i].numDom){
                    if (result[p-1].domaines[d].activites[a] === data[i].numAct){
                        return
                    } else {
                        result[p-1].domaines[d].activites.push({numAct : data[i].numAct, libAct : data[i].libAct});
                        a = a + 1;
                    }
                } else {
                    a = 0;
                    d = d + 1; 
                    result[p-1].domaines.push({numDom : data[i].numDom, libDom : data[i].libDom});
                    result[p-1].domaines[d].activites = [{numAct : data[i].numAct, libAct : data[i].libAct}];
                }
            }
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Domaine</TableCell>
                        <TableCell>Processus</TableCell>
                        <TableCell>Activité</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>
        // <TableContainer component={Paper}>
        //     <Table className={classes.table} aria-label="simple table" size="small">
        //         {data ? (
        //             <React.Fragment>
        //                 <TableHead>
        //                     <TableRow>
        //                         <TableCell>Domaine</TableCell>
        //                         <TableCell>Processus</TableCell>
        //                         <TableCell>Activité</TableCell>
        //                         {projects && projects.map((project) => (
        //                             <TableCell key={project.id} width={120} >{project.libelle}</TableCell>
        //                         ))}
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                     {/* {console.log(data)} */}
        //                     {data.map((item, i) => (
        //                         <TableRow key={i} hover role="checkbox">
        //                             <TableCell component="th" scope="row">
        //                                 {item.libDom}
        //                             </TableCell>
        //                             <TableCell>{item.libProc}</TableCell>
        //                             <TableCell>{item.libAct}</TableCell>
        //                             {projects && projects.map((project, id) => (
        //                                 <TableCell className='checkbox' key={id}>
        //                                     <Checkbox onClick={()=>handleClick(i)}/>
        //                                 </TableCell>
        //                             ))}
        //                         </TableRow>
        //                     ))}
        //                 </TableBody>
        //             </React.Fragment>
        //         ) : <TableBody></TableBody>}
        //     </Table>
        // </TableContainer>
    )
}

export default SkillsArray
