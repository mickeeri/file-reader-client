import { combineReducers } from 'redux'
import * as actionTypes from '../actions/actionTypes'

const all = (state = [], action) => {
  switch (action.type) {
    case actionTypes.UPLOAD_SUCCESS:
    case actionTypes.FETCH_SUCCESS:
      return [...state, ...action.response]
    default:
      return state
  }
}

const uploading = (state = false, action) => {
  switch (action.type) {
    case actionTypes.UPLOAD_REQUEST:
      return true
    case actionTypes.UPLOAD_SUCCESS:
    case actionTypes.UPLOAD_FAILURE:
      return false
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case actionTypes.READ_START:
      return true
    case actionTypes.READ_FAILURE:
    case actionTypes.READ_SUCCESS:
      return false
    default:
      return state
  }
}

const content = (state = '', action) => {
  if (action.content) {
    return action.content
  }
  return state
}

export default combineReducers({
  all,
  loading,
  uploading,
  content,
})
