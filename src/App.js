import React from 'react';
import './App.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

//import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import NavBar from './components/NavBar';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import Resume from './pages/Resume';
import NotFoundPage from './pages/404';

const App = () => {
    //const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = //React.useMemo(
      //() =>
        createMuiTheme({
          palette: {
            type: 'dark',//prefersDarkMode ?  'dark' : 'light',
          },
        });
      //[prefersDarkMode],
    //);
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div>
            <Router>
            <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/blogs' exact component={Blogs} />
                    <Route path='/portfolio' exact component={Portfolio} />
                    <Route path='/Resume' exact component={Resume} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
            
        </div>
        </ThemeProvider>
    )
}

export default App