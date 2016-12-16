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

const showLoader = (state = false, action) => {
  switch (action.type) {
    case actionTypes.READ_FILE_START:
      return true
    case actionTypes.READ_FILE_FAILURE:
    case actionTypes.READ_FILE_SUCCESS:
      return false
    default:
      return state
  }
}

const text = (state = '', action) => {
  if (action.text) {
    return action.text
  }

  return state
}


export default combineReducers({
  all,
  showLoader,
  text,
})
