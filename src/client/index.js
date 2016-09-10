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
import RouteMap from './containers/routeMap';
import Stations from './containers/stations';

const store = configureStore();
const root = document.getElementById('root');

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render((
    <Provider store={store}>
        <Router history={history}>
            <route path="/" component={App}>
                <IndexRedirect to="/stations" />
                <route path="map" component={RouteMap} />
                <route path="stations" component={Stations} />
            </route>
        </Router>
    </Provider>
), root);
