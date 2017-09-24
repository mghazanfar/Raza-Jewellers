import React from 'react';
import ReactDOM from 'react-dom';
import App from './Partner';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('partner'));
registerServiceWorker();
