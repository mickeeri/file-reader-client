import React, {PropTypes} from 'react'

const FileList = ({files, onReadFile}) => {

  if (!files.length) {
    return <p>Inga filer uppladdade</p>
  }

  return (
    <ul className="FileList">
      {files.map(({name}) =>
        <li
          key={name}
          onClick={() => onReadFile(name)}
        >
          {name}
        </li>
      )}
    </ul>
  )
}

FileList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
  })).isRequired,
  onReadFile: PropTypes.func.isRequired,
}

export default FileList
