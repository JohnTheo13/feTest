import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import { connectRoutes } from 'redux-first-router';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';

const routesMap = { HOME: '/', ITEM: '/item/:id' },
  {
    reducer, middleware, enhancer,
  } = connectRoutes(routesMap),
  rootReducer = combineReducers({ ...reducers, location: reducer }),
  reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line
  middlewares = applyMiddleware(middleware, thunk),
  enhancers = compose(enhancer, middlewares, reduxDevTools),
  store = createStore(rootReducer, enhancers);

export default store;
