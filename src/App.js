// Import dependances
import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
import { CSSTransition, TransitionGroup } from 'react-transition-group'

// Import pages files
import Accueil from './pages/Accueil/Accueil.js'
import Formations from './pages/Formations/Formations.js'
import Projets from './pages/Projets/Projets.js'
import Contact from './pages/Contact/Contact.js'
import Veilles from './pages/Veilles/Veilles.js'
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';


// Import components files
import Header from './components/Header/Header.js'
import Social from "./components/Social/Social.js"
import Map from "./components/Map/Map.js"
import MyNavbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'

// Import style
import './App.scss';

// Import Data
import MyData from './utils/Data.js'




function App() {
  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#FFC500',
        contrastText: '#000'
      },
      info: {
        main: '#787878',
        light: '#000000',
        dark: '#1E1E1E',
      }
    },
  })

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#ff1e00',
        contrastText: '#000'
      },
      info: {
        main: '#CCCCCC',
        light: '#FAFAFA',
        dark: '#fff',
      }
    },
  })
  const [darkMode, setDarkMode] = useState(MyData.settings.darkmodeDefault)
  const [isLogged, setIsLogged] = useState(false)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline>
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
              <Header />
              <Social />
              <Map />
            </Grid>
            <Grid
              item
              // xs, sm, md, lg = auto sizing
              xs
              sm
              md
              lg>
              <BrowserRouter>
                <MyNavbar
                  onChange={() => setDarkMode(!darkMode)}
                  checked={darkMode}
                  logStatus={isLogged ? true : false}
                  logOut={val => setIsLogged(val)} />
                <div className='main-content'>
                  <Route render={({location}) => (
                    <TransitionGroup>
                    <CSSTransition 
                      key={location.key} 
                      timeout={30000} 
                      classNames='fade'>
                      <Switch location={location}>
                        <Route exact path='/' component={Accueil}/>
                        <Route exact path='/formations' component={Formations}/>
                        <Route exact path='/projets' component={Projets}/>
                        <Route exact path='/contact' component={Contact}/>
                        <Route exact path='/veilles' component={Veilles}/>
                        <Route exact path='/register' component={Register}/>
                        <Route exact path='/login'>
                          <Login
                            logIn={val => setIsLogged(val)} />
                        </Route>
                        <Route exact path='/logout'></Route>
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                  )}/>
                </div>
              </BrowserRouter>
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
