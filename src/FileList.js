import React, {PropTypes} from 'react'

const FileList = ({files}) => {

  if (!files.length) {
    return <p>Inga filer uppladdade</p>
  }

  return (
    <ul className="FileList">
      {files.map(file =>
        <li key={file.name}>{file.name}</li>
      )}
    </ul>
  )
}

FileList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })).isRequired
}

export default FileList
