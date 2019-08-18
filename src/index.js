import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'containers/App';
import 'index.css'

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import penderMiddleware from 'redux-pender';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, devTools(applyMiddleware(penderMiddleware())));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
