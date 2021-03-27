// Import dependances
import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import pages files
import Accueil from './pages/Accueil/Accueil.js'
import Formations from './pages/Formations/Formations.js'
import Stages from './pages/Stages/Stages.js'
import Contact from './pages/Contact/Contact.js'


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
          lg={3}>
            <Header/>
        </Grid>
        <Grid 
          item
          // xs, sm, md, lg = auto sizing
          xs
          sm
          md
          lg>
            <Navbar/>
            <Router>
              <Route exact path='/'>
                <Accueil/>
              </Route>
              <Route exact path='/formations'>
                <Formations/>
              </Route>
              <Route exact path='/stages'>
                <Stages/>
              </Route>
              <Route exact path='/contact'>
                <Contact/>
              </Route>
            </Router>
            <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
