import * as actionTypes from './actionTypes'
import fetch from 'isomorphic-fetch'

const API_ROOT = 'http://localhost:5000/api/files'

const makeGetRequest = (url) => {

  return fetch(url).then(response => {
    return response.json().then(data => {
      if (response.ok) {
        return data
      } else {
        return Promise.reject({
          status: response.status,
          message: data.message
        })
      }
    })
  })
}

const makePostRequest = (files) => {
  const formData = new FormData()
  files.forEach(file => {
    formData.append(file.name, file)
  })

  return fetch(API_ROOT, {
    method: 'POST',
    body: formData,
  })
  .then(response => {
    return response.json().then(data => {
      if (response.ok) {
        return data
      } else {
        return Promise.reject({
          status: response.status,
          message: data.message,
        })
      }
    })
  })
}

// Fetch and process single file.
export const readFile = (fileName) => (dispatch) => {

  dispatch({ type: actionTypes.READ_START })

  const url = `${API_ROOT}/${fileName}`

  return makeGetRequest(url).then(
    response => {
      dispatch({
        type: actionTypes.READ_SUCCESS,
        response,
      })
    },
    error => {
      dispatch({
        type: actionTypes.READ_FAILURE,
        errorMessage: error.message || 'Error while reading file',
      })
    }
  )
}

// Fetch all files uploaded to server.
export const fetchFiles = (fileName) => (dispatch) => {

  const url = `${API_ROOT}${fileName ? `/${fileName}` : ''}`

  dispatch({ type: actionTypes.FETCH_REQUEST })

  return makeGetRequest(API_ROOT).then(
    response => {
      dispatch({
        type: actionTypes.FETCH_SUCCESS,
        response,
      })
    },
    error => {
      dispatch({
        type: actionTypes.FETCH_FAILURE,
        errorMessage: error.message || 'Error while fetching files'
      })
    }
  )
}

export const uploadFiles = (files) => (dispatch) => {
  dispatch({ type: actionTypes.UPLOAD_REQUEST })

  return makePostRequest(files).then(
    response => {
      dispatch({
        type: actionTypes.UPLOAD_SUCCESS,
        response,
      })
    },
    error => {
      dispatch({
        type: actionTypes.UPLOAD_FAILURE,
        errorMessage: error.message || 'Error while uploading file'
      })
    }
  )
}
