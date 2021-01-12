import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import { GlobalStyles } from './global-styles'

import { Provider } from './Context/AppContext'



ReactDOM.render(
  <React.StrictMode>
    <Provider >
      <GlobalStyles />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);