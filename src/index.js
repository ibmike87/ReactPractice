import React from 'react';
import { render } from 'react-dom';
import App from './App';
import AppCounter from './AppCounter';

render(<App />, document.getElementById('root'));

render(<AppCounter />, document.getElementById('rootCounter'));
