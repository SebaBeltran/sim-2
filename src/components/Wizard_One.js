import React, { Component } from 'react';
import "./Wizard.css";
import {Link} from "react-router-dom";
import { get_name, get_address, get_city, get_state, get_zip } from "../ducks/reducer";
import { connect } from "react-redux";

function Wizard_One(props){
    return (
      <div>
        <div className="wizard_body">
          <h4>Property Name</h4>
          <input className="input_name" placeholder="Name" value={props.name} onChange={(e)=>{props.get_name(e.target.value)}}/>
          
          <h4>Address</h4>
          <input className="input_address" placeholder="Address" value={props.address} onChange={(e)=>{props.get_address(e.target.value)}}/>
          
          <div className="input_wrapper">
            <h4>City</h4>
            <input className="input_" placeholder="City" value={props.city} onChange={(e)=>{props.get_city(e.target.value)}}/>
          </div>
          
          <div className="input_wrapper">
            <h4>State</h4>
          <input className="input_state" placeholder="State" value={props.state} onChange={(e)=>{props.get_state(e.target.value)}}/>
          </div>
          
          <div className="input_wrapper">
            <h4>Zip</h4>
          <input className="input_zip" type="number" placeholder="Zip" value={props.zip} onChange={(e)=>{props.get_zip(e.target.value)}}/>
          </div>

        </div>
        
        <Link to="/wizard/step2">
          <button className="btn_next">Next Step</button>
        </Link>
        
      </div>
    )
  }


export default connect (null, {get_name, get_address, get_city, get_state, get_zip})(Wizard_One)