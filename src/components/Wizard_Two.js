import React, { Component } from 'react';
import "./Wizard.css"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { get_url } from "../ducks/reducer"

function Wizard_Two(props){
  console.log(props.name)
    return (
      <div>
        <div className="wizard_body">
          <h4>Url</h4>
          <input className="input_address" placeholder="Image url" value={props.url} onChange={(e)=>props.get_url(e.target.value)}/>
        </div>
        <Link to="/wizard/step1">
          <button className="btn_prev">Previous Step</button>
        </Link>
        <Link to="/wizard/step3">
          <button className="btn_next">Next Step</button>
        </Link>
      </div>
    )
  }

export default connect(null, {get_url}) (Wizard_Two)