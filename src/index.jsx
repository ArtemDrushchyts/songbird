import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App/index';

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Index />, document.getElementById('root'));
