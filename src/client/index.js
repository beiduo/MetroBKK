import './styles/normalize.css';

import './lib/rxjs-extentions';

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRedirect, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import rootReducer from './reducers';
import configureStore from './store/configureStore';

import App from './containers/app';
import RouteMap from './components/routeMap';
import Stations from './components/stations';



// const createStoreWithMiddleware = applyMiddleware(
// //  thunkMiddleware, // 允许我们 dispatch() 函数
//     loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
// )(createStore);

// const preLoadedState = {
// };

// const store = createStoreWithMiddleware(rootReducer, preLoadedState);

const store = configureStore();
const root = document.getElementById('root');

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render((
    <Provider store={store}>
        <Router history={history}>
            <route path="/" component={App}>
                <IndexRedirect to="/map" />
                <route path="map" component={RouteMap} />
                <route path="stations" component={Stations} />
            </route>
        </Router>
    </Provider>
), root);
