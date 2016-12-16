import React, {Component} from 'react'
import DropZone from 'react-dropzone'
import FileList from '../components/FileList'
import {connect} from 'react-redux'
import * as fileActions from '../actions/fileActions'
import AlertMessage from './AlertMessage'

class FileUploader extends Component {
  onDrop = (files) => {
    this.props.uploadFiles(files)
  }

  render() {
    const {files} = this.props

    return (
      <div className="FileUploader">
        <AlertMessage />
        <DropZone
          onDrop={this.onDrop}
          className="DropZone"
          disablePreview
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

const mapStateToProps = ({files}) => ({
  files: files.all,
})

export default connect(mapStateToProps, fileActions)(FileUploader)
