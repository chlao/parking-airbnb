import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from './App';
import './index.css';
import makeStore from './store';
import {Provider} from 'react-redux';

const store = makeStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
