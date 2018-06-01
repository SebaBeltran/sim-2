import React, {Component} from "react";
import {HashRouter, Route, Switch} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Wizard from "./components/Wizard"

export default function(){
  return(
  <HashRouter>
    <Switch>
      <Route component={Dashboard} path="/" exact/>
      <Route component={Wizard} path="/wizard" />
    </Switch>  
  </HashRouter>  
  )
}
