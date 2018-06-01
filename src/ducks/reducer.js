import axios from "axios"

let initialState = {
  name:"",
  address:"",
  city: "",
  zip:0,
  url:"",
  monthlymortage:0,
  rent: 0
}

const GET_NAME = "GET_NAME",
      GET_ADDRESS = "GET_ADDRESS",
      GET_CITY = "GET_CITY",
      GET_STATE = "GET_STATE",
      GET_ZIP = "GET_ZIP",
      GET_URL = "GET_URL",
      GET_MORTAGE = "GET_MORTAGE",
      GET_RENT = "GET_RENT",
      POST_PROPERTY = "POST_PROPERTY";


export default function reducer(state=initialState, action){
  switch(action.type){
    case GET_NAME:
      return Object.assign({}, state, {name: action.payload});
    case GET_ADDRESS:
      return Object.assign({}, state, {address: action.payload});
    case GET_CITY:
      return Object.assign({}, state, {city: action.payload}); 
    case GET_STATE:
      return Object.assign({}, state, {state: action.payload}); 
    case GET_ZIP:
      return Object.assign({}, state, {zip: action.payload}); 
    case GET_URL:
      return Object.assign({}, state, {url: action.payload});
    case GET_MORTAGE:
      return Object.assign({}, state, {monthlymortage: action.payload});
      case GET_RENT:
      return Object.assign({}, state, {rent: action.payload});
      case POST_PROPERTY:
      return Object.assign({}, state, {});            
    default:
      return state;            
  }
}

export function get_name(val){
  return({
    type: GET_NAME,
    payload: val
  })
}

export function get_address(val){
  return({
    type: GET_ADDRESS,
    payload: val
  })
}

export function get_city(val){
  return({
    type: GET_CITY,
    payload: val
  })
}
export function get_state(val){
  return({
    type: GET_STATE,
    payload: val
  })
}
export function get_zip(val){
  return({
    type: GET_ZIP,
    payload: val
  })
}
export function get_url(val){
  return({
    type: GET_URL,
    payload: val
  })
}

export function get_mortage(val){
  return({
    type: GET_MORTAGE,
    payload: val
  })
}

export function get_rent(val){
  return({
    type: GET_RENT,
    payload: val
  })
}

export function post_property(name, address, city, state, zip, url, monthlymortage, rent){
  let body = {
    name: name,
  address: address,
  city: city,
  zip:zip,
  url:url,
  monthlymortage:monthlymortage,
  rent: rent
  }
  axios.post(`/api/houser`, body).then(res => 
  console.log(res))
  return({
    type: POST_PROPERTY
  })
}