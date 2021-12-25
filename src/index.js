import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './index.css'
import Rutas from './routes/rutas'

import Home from './pages/Home'
//import Questions from './components/Questions'

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Rutas />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);