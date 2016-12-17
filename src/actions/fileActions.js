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

export const fetchFiles = (fileName) => (dispatch) => {

  const url = `${API_ROOT}${fileName ? `/${fileName}` : ''}`

  dispatch({ type: fileName ? actionTypes.READ_START : actionTypes.FETCH_REQUEST })

  return makeGetRequest(url).then(
    response => {
      dispatch({
        type: fileName ? actionTypes.READ_SUCCESS : actionTypes.FETCH_SUCCESS,
        response,
        content: response.content,
      })
    },
    error => {
      dispatch({
        type: fileName ? actionTypes.READ_FAILURE : actionTypes.FETCH_FAILURE,
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



export const readFile = (file) => (dispatch) => {
  dispatch({ type: actionTypes.READ_START })

  const fileReader = new FileReader()

  fileReader.onloadend = (e) => {
    dispatch({
      type: actionTypes.READ_SUCCESS,
      text: e.target.result,
      successMessage: 'File loaded',
    })
  }

  fileReader.onerror = (err) => {
    console.error(err)

    dispatch({
      actionTypes: actionTypes.READ_FAILURE,
      errorMessage: err.message || 'Failed to read file',
    })
  }

  fileReader.readAsText(file)
}
