// react
import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';

// components/containers
import AppContainer from './containers/AppContainer';

// middleware, THUNK for async processes.
const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  allReducers,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers,
  ),
);

// wrap parent app node in the provider
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
