import React, {PropTypes} from 'react'
import Loader from './Loader'

export const FileContent = ({showLoader, text}) => {
  if (!showLoader && !text) {
    return null
  }

  return (
    <div className="FileContent">
      {showLoader ?
        <Loader text="Loading file" /> :
        <div>{text}</div>
      }
    </div>
  )
}

FileContent.propTypes = {
  showLoader: PropTypes.bool.isRequired,
  text: PropTypes.string,
}

export default FileContent
