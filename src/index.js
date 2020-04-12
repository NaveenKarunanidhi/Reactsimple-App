import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainPage from './pages/main';

ReactDOM.render(<MainPage/>, document.getElementById('root'));

serviceWorker.unregister();
