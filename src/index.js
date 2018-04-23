import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProgressBar from './components/progressbar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProgressBar />, document.getElementById('root'));
registerServiceWorker();