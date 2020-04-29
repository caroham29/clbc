import {
    ADD_CONNECT,
  } from '../actions/connect'

// import { RECEIVE_DATA } from "../actions/shared";
  
export default function goals (state = [], action) {
    switch(action.type) {
        case ADD_CONNECT :
            return state.concat([action.connect])
        default :
            return state
    }
}