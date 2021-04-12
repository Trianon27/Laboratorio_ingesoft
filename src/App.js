import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './view/Pages/Home';
import LoginUp from './view/Pages/LoginUp';
import Register from './view/Pages/Register';
import SignedUp from './view/Pages/SignedUp';

function App(){
  return(
    <Router>
      <Switch>
        <Route path ="/Home">
          <Home/>
        </Route>
        <Route path="/Register" component = {Register}/>
        <Route path = "/SignedUp" component = {SignedUp}/>
        <Route path = "/LoginUp" component = {LoginUp}/>
        
      </Switch>      
    </Router>
  )

}

export default App;