import React, {Component} from "react";
import {HashRouter, Route, Switch} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Wizard_One from "./components/Wizard_One";
import Wizard_Two from "./components/Wizard_Two";
import Wizard_Three from "./components/Wizard_Three";
import Wizard from "./components/Wizard"

export default function(){
  return(
  <HashRouter>
    <Switch>
      <Route component={Dashboard} path="/" exact/>
      <Route component={Wizard} path="/wizard" />
      {/* <Route component={Wizard_One} path="/wizard/step1"/>
      <Route component={Wizard_Two} path="/wizard/step2"/>
      <Route component={Wizard_Three} path="/wizard/step3"/> */}
    </Switch>  
  </HashRouter>  
  )
}
