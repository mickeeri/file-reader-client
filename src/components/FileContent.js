import React, {PropTypes} from 'react'
import Loader from './Loader'

export const FileContent = ({content, loading}) => {
  if (!loading && !content) {
    return null
  }

  return (
    <div className="FileContent">
      {loading ?
        <Loader text="Reading file" /> :
        <div>{content}</div>
      }
    </div>
  )
}

FileContent.propTypes = {
  content: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}

export default FileContent
