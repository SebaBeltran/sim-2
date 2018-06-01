import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./Dashboard.css"
import { connect } from "react-redux"
import { get_all } from "../ducks/reducer"
import axios from "axios"



export default class Dashboard extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      houses: []
    }
    this.getHouses = this.getHouses.bind(this)
    this.deleteHouse = this.deleteHouse.bind(this)
  }
  componentDidMount(){
    this.getHouses()
  }

 getHouses(){
    axios.get(`/api/houser`).then(res => {
      console.log(res.data);
      this.setState({houses: res.data})
    })
  }

  deleteHouse(id){
    axios.delete(`/api/houser/${id}`).then( res => {
      this.getHouses()
    })
  }

  render(){
    console.log(this.state.houses)
    let mapped = this.state.houses.map((obj, i) => {
      const {id, name, address, city, state, zip, url, monthlymortage, desiredmortage} = obj
      return (
        <div key={i} className="prop_wrapper">
        <div className="pic" style={ { backgroundImage: `url(${url})` } }>
        </div>
        <div className="data_wrapper">
          <p>Propery Name:</p>
          <h4>{name}</h4>
          <p>Address:</p>
          <h4>{address}</h4>
          <p>City:</p>
          <h4>{city}</h4>
          <p>State:</p>
          <h4>{state}</h4>
          <p>Zip:</p>
          <h4>{zip}</h4>
        </div>
       
        <div className="data_wrapper">
        <p>Monthly Mortage:</p>
          <h4>{monthlymortage}</h4>
          <p>Desired:</p>
          <h4>{desiredmortage}</h4>
        </div>
        <button className="delete_btn" onClick={()=>this.deleteHouse(id)}>X</button>  
        </div>  
      )
    })
    return (
      <div className="dashboard_wrapper">
        <div className="dashboard_header">
          <h1>Dashboard</h1>
          <Link to="/wizard/step1">
            <button className="add_btn">ADD NEW PROPERTY</button>
          </Link>
        </div>
        <hr/>
        
        <div className="dashboard_body">
          {mapped}
        </div>

      </div>
    )
  }
}



// export default connect(mapStateToProps, {get_all})(Dashboard)