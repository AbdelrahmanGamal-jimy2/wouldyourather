import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';

import middleware from './middleware'
import reducer from './reducers'

const store = createStore(reducer, middleware)

ReactDOM.render(
    <App />,
  document.getElementById('root')
);