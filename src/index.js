import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import './index.css'

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

//const store = createStore(reducers);
const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, devTools);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
