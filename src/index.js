import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import App from './App';

import { createStore, applyMiddleware as apply } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

import thunkMiddleware from 'redux-thunk'


const store = createStore( rootReducer, apply( thunkMiddleware ) )

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <Provider store={ store }>

        <App />
       
    </Provider>
);

