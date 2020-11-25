import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/lumen/bootstrap.min.css';

//
// import 'popper/dist/popper.min.js';

import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import NavBar from './components/NavBar.jsx';

ReactDOM.render(
  <BrowserRouter>
  <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/signup" component={SignUp} />
      <Route  path="/signin" component={SignIn} />
    </Switch>
  </BrowserRouter> 
  ,
  document.getElementById('root')
);


