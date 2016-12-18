import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import * as fileActions from '../actions/fileActions'
import AlertMessage from './AlertMessage'
import DropZone from 'react-dropzone'
import FileContent from '../components/FileContent'
import FileList from '../components/FileList'
import Loader from '../components/Loader'

class FileUploader extends Component {
  componentDidMount() {
    this.props.fetchFiles();
  }

  onDrop = (files) => {
    this.props.uploadFiles(files)
  }

  onReadFile = (fileName) => {
    this.props.readFile(fileName)
  }

  render() {
    const {files, result, loading, uploading} = this.props

    return (
      <div className="FileUploader">
        <div className="DropZone-container">
          <h1>React file reader</h1>
          <AlertMessage />
          <DropZone
            onDrop={this.onDrop}
            className="DropZone"
            disablePreview
          >
            <div className="DropZone-content">
              <p>Drop files here</p>
              <Loader text="Uploading files" show={uploading} />
            </div>
          </DropZone>
          <FileList
            files={files}
            onReadFile={this.onReadFile}
            nameOfActive={result.fileName}
          />
        </div>
        <FileContent
          result={result}
          loading={loading}
        />
      </div>
    )
  }
}

FileUploader.propTypes = {
  files: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  result: PropTypes.shape({
    fileName: PropTypes.string.isRequired,
    processedContent: PropTypes.string.isRequired,
    mostCommonWord: PropTypes.string.isRequired,
  }),
  uploading: PropTypes.bool.isRequired,
}

const mapStateToProps = ({files}) => ({
  files: files.all,
  loading: files.loading,
  result: files.result,
  uploading: files.uploading,
})

export default connect(mapStateToProps, fileActions)(FileUploader)
