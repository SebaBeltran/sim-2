import { createStore, applyMiddleware } from "redux"
import promiseMiddleware from "redux-promise-middleware"
import reducer from "./reducer"

const middleware = applyMiddleware(promiseMiddleware)
let store = createStore(reducer)

export default store;