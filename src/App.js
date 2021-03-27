// Import dependances
import React from 'react';
import { Container, Grid } from '@material-ui/core';

// Import pages files
import Accueil from './pages/Accueil/Accueil.js'

// Import components files
import Header from './components/Header/Header.js'
import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'

// Import style
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
            <Header/>
        </Grid>
        <Grid 
          item
          // xs, sm, md, lg = auto sizing
          xs
          sm
          md
          lg
          style={{backgroundColor: 'red'}}
          >
            <Navbar/>
            <Accueil/>
            <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
