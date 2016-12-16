import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import FileUploader from './FileUploader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React file uploader</h2>
        </div>
          <FileUploader />
      </div>
    )
  }
}

export default App
