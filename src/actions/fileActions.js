import * as actionTypes from './actionTypes'

export const uploadFiles = (files) => (dispatch) => {
  console.log('ACtion', files);

  dispatch({ type: actionTypes.UPLOAD_REQUEST })

  dispatch({
    type: actionTypes.UPLOAD_SUCCESS,
    files,
    successMessage: 'Files uploaded'
  })
}
