// Import dependances
import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import pages files
import Accueil from './pages/Accueil/Accueil.js'
import Formations from './pages/Formations/Formations.js'
import Projets from './pages/Projets/Projets.js'
import Contact from './pages/Contact/Contact.js'
import Veilles from './pages/Veilles/Veilles.js'


// Import components files
import Header from './components/Header/Header.js'
import Social from "./components/Social/Social.js"
import MyNavbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'

// Import style
import './App.scss';

function App() {
  return (
      <Container className='app-container'>
        <Grid
          container
          spacing={7}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}>
            <Header/>
            <Social/>
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
              <div className='main-content'>
                <Switch>
                  <Route exact path='/'>
                    <Accueil />
                  </Route>
                  <Route exact path='/formations'>
                    <Formations />
                  </Route>
                  <Route exact path='/projets'>
                    <Projets />
                  </Route>
                  <Route exact path='/contact'>
                    <Contact />
                  </Route>
                  <Route exact path='/veilles'>
                    <Veilles />
                  </Route>
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
  );
}

export default App;
