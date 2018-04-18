/**
 * Точка входа в приложение
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { combineReducer } from './reducers';
import App from './App';
import { initialAppStore } from './functions';

import './index.css';
import registerServiceWorker from './registerServiceWorker';



const baseAppStore = initialAppStore ();//получаем обьект для отправки в Store в качестве initialState

// создаем хранилище для состояния приложения
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const appStore = createStore(//создаем Store (передаем редьюсер и initialState)
                    combineReducer,
                    baseAppStore,
                    reduxDevTools
);

console.log(appStore);





ReactDOM.render(
    <Provider store = {appStore}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
