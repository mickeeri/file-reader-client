import {connect} from 'react-redux'
import * as fileActions from '../actions/fileActions'
import AlertMessage from './AlertMessage'
import DropZone from 'react-dropzone'
import FileContent from '../components/FileContent'
import FileList from '../components/FileList'
import React, {Component} from 'react'

class FileUploader extends Component {
  onDrop = (files) => {
    this.props.uploadFiles(files)
  }

  onReadFile = (file) => {
    this.props.readFile(file)
  }

  render() {
    const {files, text, showLoader} = this.props

    return (
      <div className="FileUploader">
        <div className="DropZone-container">
          <h1>React file uploader</h1>
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
          <FileList
            files={files}
            onReadFile={this.onReadFile}
          />
        </div>
        <FileContent
          showLoader={showLoader}
          text={text}
        />
      </div>
    )
  }
}

const mapStateToProps = ({files}) => ({
  files: files.all,
  showLoader: files.showLoader,
  text: files.text,
})

export default connect(mapStateToProps, fileActions)(FileUploader)
