import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import store from './store';

import 'bootstrap/dist/css/bootstrap.css';

let hashHistory = Router.hashHistory;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename='/build' history={hashHistory}>
        <App />
      </Router>
    </Provider>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
