import * as actionTypes from './actionTypes'
import fetch from 'isomorphic-fetch'

const API_ROOT = 'http://localhost:5000/api/files'

const makeFetchRequest = ({url = API_ROOT, method = 'GET', body = null }) => {
  return fetch(url,{
    method,
    body,
  })
  .then(response => {
    if (response.ok) {
      if (response.status === 204) {
        return Promise.resolve()
      } else {
        return response.json().then(data => data)
      }
    } else {
      return Promise.reject({
        message: `Something went wrong: ${response.status} ${response.statusText}`
      })
    }
  })
  .catch(error => {
    return Promise.reject({
      message: error.message || 'Something went wrong'
    })
  })
}

// Fetch and process single file.
export const readFile = (fileName) => (dispatch) => {
  dispatch({ type: actionTypes.READ_START })

  return makeFetchRequest({url: `${API_ROOT}/${fileName}`}).then(
    response => {
      dispatch({
        type: actionTypes.READ_SUCCESS,
        response,
      })
    },
    error => {
      dispatch({
        type: actionTypes.READ_FAILURE,
        errorMessage: error.message,
      })
    }
  )
}

// Fetch all files uploaded to server.
export const fetchFiles = (fileName) => (dispatch) => {

  dispatch({ type: actionTypes.FETCH_REQUEST })

  return makeFetchRequest({}).then(
    response => {
      dispatch({
        type: actionTypes.FETCH_SUCCESS,
        response,
      })
    },
    error => {
      dispatch({
        type: actionTypes.FETCH_FAILURE,
        errorMessage: error.message,
      })
    }
  )
}

export const uploadFiles = (files) => (dispatch, getState) => {

  // Validate file type.
  const allowedFormats = ['text/markdown', 'application/rtf', 'text/plain']
  const fileTypes = files.map(file => file.type)
  if (fileTypes.some(fileType => allowedFormats.indexOf(fileType) === -1)) {
    dispatch({
      type: actionTypes.UPLOAD_FAILURE,
      errorMessage: 'File type not allowed',
    })

    return Promise.resolve()
  }

  // Filter out all the files already uploaded.
  const filesToUpload = files.filter(file => {
    const fileNamesInStore = getState().files.all.map(file => file.name)
    const notInStore = fileNamesInStore.indexOf(file.name) === -1
    return notInStore
  })

  // Don't make request if no files left to upload.
  if (!filesToUpload.length) {
    return Promise.resolve()
  }

  dispatch({ type: actionTypes.UPLOAD_REQUEST })

  // Post the files as FormData
  const body = new FormData()
  files.forEach(file => {
    body.append(file.name, file)
  })

  return makeFetchRequest({body, method: 'POST'}).then(
    response => {
      dispatch({
        type: actionTypes.UPLOAD_SUCCESS,
        successMessage: 'Files uploaded',
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

export const deleteFile = (fileName) => (dispatch) => {

  dispatch({ type: actionTypes.DELETE_REQUEST })

  return makeFetchRequest({url: `${API_ROOT}/${fileName}`, method: 'DELETE'}).then(
    response => {
      dispatch({
        type: actionTypes.DELETE_SUCCESS,
        successMessage: 'File deleted',
        fileName,
      })
    },
    error => {
      dispatch({
        type: actionTypes.DELETE_FAILURE,
        errorMessage: error.message,
      })
    }
  )
}
