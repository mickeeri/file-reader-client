import * as actionTypes from './actionTypes'

export const uploadFiles = (files) => (dispatch) => {

  dispatch({ type: actionTypes.UPLOAD_REQUEST })

  dispatch({
    type: actionTypes.UPLOAD_SUCCESS,
    files,
    successMessage: 'Files uploaded'
  })
}

export const readFile = (file) => (dispatch) => {
  dispatch({ type: actionTypes.READ_FILE_START })

  const fileReader = new FileReader()

  fileReader.onloadend = (e) => {
    dispatch({
      type: actionTypes.READ_FILE_SUCCESS,
      text: e.target.result,
      successMessage: 'File loaded',
    })
  }

  fileReader.onerror = (err) => {
    console.error(err)

    dispatch({
      actionTypes: actionTypes.READ_FILE_FAILURE,
      errorMessage: err.message || 'Failed to read file',
    })
  }

  fileReader.readAsText(file)
}
