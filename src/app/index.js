import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';

import combinedReducers from './reducers/combineReducers.js';

import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />;
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));
