import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import Dashboard from './components/Dashboard/Dashboard.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter> 
  ,
  document.getElementById('root')
);


