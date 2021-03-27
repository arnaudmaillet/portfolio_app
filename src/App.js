import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './App.scss';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid 
          item 
          xs={12} 
          sm={12} 
          md={4} 
          lg={3}
          style={{backgroundColor: 'blue'}}
          >
            ABC
        </Grid>
        <Grid 
          item 
          xs
          sm
          md
          lg
          style={{backgroundColor: 'red'}}
          >
            XYZ
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
