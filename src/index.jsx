import {StarlightLoader} from './libs/starlight-loader/starlight-loader';
StarlightLoader.start();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
