import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import './index.css';
import 'font-awesome/css/font-awesome.min.css'

const store = configureStore()

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
