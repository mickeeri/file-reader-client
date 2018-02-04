import React, { PropTypes } from 'react';
import FileUploader from './containers/FileUploader';
import { Provider } from 'react-redux';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <FileUploader />
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
