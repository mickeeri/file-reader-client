import React, {Component} from 'react'
import DropZone from 'react-dropzone'
import FileList from './FileList'

class FileUploader extends Component {

  state = {
    files: [],
    errors: [],
  }

  onDrop = (files) => {
    this.setState({files: [...this.state.files, ...files]})
  }

  render() {
    const {files} = this.state

    return (
      <div className="FileUploader">
        <DropZone
          onDrop={this.onDrop}
          className="DropZone"
        >
          <div className="DropZone-content">
            Drop files here
          </div>
        </DropZone>
        <FileList files={files} />
      </div>
    )
  }
}

export default FileUploader
