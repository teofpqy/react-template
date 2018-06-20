import Hello from './component/Hello';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(<AppContainer>
    <Hello />
</AppContainer>, document.getElementById('root'));
