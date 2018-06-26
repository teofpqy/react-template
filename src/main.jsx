import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './assets/base.css';
import Hello from './component/Hello';

ReactDOM.render(
  <AppContainer>
    <Hello />
  </AppContainer>,
  document.getElementById('root'),
);
