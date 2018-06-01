import React, { Component } from 'react';
import "./Wizard.css"
import {Route, Link} from "react-router-dom"
import Wizard_One from "./Wizard_One"
import Wizard_Two from "./Wizard_Two"
import Wizard_Three from "./Wizard_Three"

export default function Wizard(){
  return(
    <div className="wizard_wrapper">
        
        <div className="wizard_header">
          <h1>Add New Listing</h1>
          <Link to="/">
            <button className="btn_cancel">Cancel</button>
          </Link>
        </div>
        <Route component={Wizard_One} path="/wizard/step1" />
        <Route component={Wizard_Two} path="/wizard/step2" />
        <Route component={Wizard_Three} path="/wizard/step3" />
     </div>   
  )
  }
  
