import { combineReducers } from 'redux';
import fileReducer from './fileReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  files: fileReducer,
  messages: messageReducer,
});
