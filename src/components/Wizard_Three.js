import React, { Component } from 'react';
import "./Wizard.css"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {get_mortage, get_rent, post_property} from "../ducks/reducer"

function Wizard_Three(props){
  console.log(props)
  const {name, address, city, state, zip, url, monthlymortage, rent} = props
    return (
      <div>
        <div className="wizard_body">
          <h2>Recommended Rent: ${monthlymortage*1.25}</h2>
          <h4>Monthly Mortage Amount</h4>
          <input className="input_address" placeholder="Monthly Mortage Amount" type="number" value={props.mortage} onChange={(e)=>props.get_mortage(e.target.value)}/>
          <h4>Desired Monthly Rent</h4>
          <input className="input_address" placeholder="Desired Monthly Rent" type="number" value={props.rent} onChange={(e)=>props.get_rent(e.target.value)}/>
        </div>
        <Link to="/wizard/step2">
          <button className="btn_prev">Previous Step</button>
        </Link>
        <Link to="/">
          <button className="btn_complete" onClick={()=>props.post_property(name, address, city, state, zip, url, monthlymortage, rent)}>Complete</button>
        </Link>
      </div>
    )
  }
  
  function mapStateToProps(state){
    return({
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip,
    url: state.url,
    monthlymortage: state.monthlymortage,
    rent: state.rent
  })
  }

  export default connect (mapStateToProps, {get_mortage, get_rent, post_property})(Wizard_Three)
