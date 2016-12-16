import { combineReducers } from 'redux'
import * as actionTypes from '../actions/actionTypes'

const all = (state = [], action) => {
  switch (action.type) {
    case actionTypes.UPLOAD_SUCCESS:
      return [...state, ...action.files]
    default:
      return state
  }
}


export default combineReducers({
  all,
})
