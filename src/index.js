import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { GamerRater } from './GamerRater';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GamerRater />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
)