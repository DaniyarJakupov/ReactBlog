import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

//All actions will flow through this middleware, before reaching reducers
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  {/* Router object decides what React component to render, when URL changes */}
  {/* browserHistory object tells React Router how to interprete changes to URL  */}
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
