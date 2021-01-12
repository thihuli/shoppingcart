import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';

import { GlobalStyles } from './global-styles'

import { Provider } from './Context/AppContext'



ReactDOM.render(
  <React.StrictMode>
    <Provider >
      <GlobalStyles />
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);