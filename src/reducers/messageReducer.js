import { combineReducers } from 'redux'
import * as actionTypes from '../actions/actionTypes'

const successMessage = (state = null, action) => {
  const { successMessage, type } = action
  if (type === actionTypes.RESET_MESSAGE) {
    return null
  } else if (successMessage) {
    return successMessage
  }
  return state
}

const errorMessage = (state = null, action) => {
  const { errorMessage, type } = action
  if (type === actionTypes.RESET_MESSAGE) {
    return null
  } else if (errorMessage) {
    return errorMessage
  }
  return state
}

export default combineReducers({
  errorMessage,
  successMessage,
})
