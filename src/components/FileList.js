import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const FileList = ({ files, onReadFile, nameOfActive, onDeleteFile }) => {
  if (!files.length) {
    return <p>Inga filer uppladdade</p>;
  }

  return (
    <ul className="FileList">
      {files.map(({ name }) => (
        <li key={name} className={nameOfActive === name && 'active'}>
          <span className="name-field" onClick={() => onReadFile(name)}>
            {name}
          </span>
          <FontAwesome
            className="delete-button"
            name="trash"
            onClick={() => onDeleteFile(name)}
          />
        </li>
      ))}
    </ul>
  );
};

FileList.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      length: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onReadFile: PropTypes.func.isRequired,
  onDeleteFile: PropTypes.func.isRequired,
};

export default FileList;
