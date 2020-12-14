import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




import { BrowserRouter } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard.jsx';

ReactDOM.render(
  <BrowserRouter>

  <Dashboard />
  
  </BrowserRouter> 
  ,
  document.getElementById('root')
);


