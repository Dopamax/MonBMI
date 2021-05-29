import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  
} from "react-router-dom";

import './App.css';
import './css/bootstrap.min.css'

import '../node_modules/jquery/dist/jquery'
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    
    <Route exact path="/" component={Home} />
    
    </Switch>
   </BrowserRouter>
  );
}


export default App;
