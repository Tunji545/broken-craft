import React from "react";
import './App.css';
import{ BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ArtsWorks, HowItWorks, CreatorCommunity, Search, Profile, Home} from "./pages/index"
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { theme } from "./theme/theme";
import {  ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/arts' component={ArtsWorks} />
          <Route path='/how' component={HowItWorks} />
          <Route path='/search' component={Search} />
          <Route path='/community' component={CreatorCommunity} />
          <Route path='/profile' component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
