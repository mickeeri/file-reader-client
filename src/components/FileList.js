import React, {PropTypes} from 'react'

const FileList = ({files}) => {

  if (!files.length) {
    return <p>Inga filer uppladdade</p>
  }


  function readFile(file) {
    const fileReader = new FileReader()
    fileReader.onloadend = (e) => {
      console.log(e.target.result);
    }

    fileReader.readAsText(file)
  }

  return (
    <ul className="FileList">
      {files.map(file =>
        <li
          key={file.name}
          onClick={() => readFile(file)}
        >
          {file.name}
        </li>
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
