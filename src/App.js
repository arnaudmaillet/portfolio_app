// Import dependances
import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import pages files
import Accueil from './pages/Accueil/Accueil.js'
import Formations from './pages/Formations/Formations.js'
import Stages from './pages/Stages/Stages.js'
import Contact from './pages/Contact/Contact.js'
import Veilles from './pages/Veilles/Veilles.js'


// Import components files
import Header from './components/Header/Header.js'
import MyNavbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'

// Import style
import './App.scss';

function App() {
  return (
    <Container className='top_main_margin'>
      <Grid
        container
        spacing={7}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}>
          <Header />
        </Grid>
        <Grid
          item
          // xs, sm, md, lg = auto sizing
          xs
          sm
          md
          lg>
          <Router>
            <MyNavbar />
            <Switch>
              <Route exact path='/'>
                <Accueil />
              </Route>
              <Route exact path='/formations'>
                <Formations />
              </Route>
              <Route exact path='/stages'>
                <Stages />
              </Route>
              <Route exact path='/contact'>
                <Contact />
              </Route>
              <Route exact path='/veilles'>
                <Veilles />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
