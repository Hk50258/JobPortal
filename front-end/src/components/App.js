import React, {  useState } from "react";
import {Switch, Route} from "react-router-dom";
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'

function App() {
  
  
  return (
    <div className='container'>
      <center>
        <h1>Header goes Here</h1>
        <hr/>
        <Switch>
          {!sessionStorage.getItem('isLoggedIn') &&<div>
              <Route exact path='/' component={Login}></Route>
              <Route exact path='/:var' component={Login}></Route>
            </div>}
          {
            sessionStorage.getItem('isLoggedIn') &&<div>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/:var' component={Home}></Route>
              
            </div>
          }  
        </Switch>
      </center>
    </div>
  );
}

export default App;
