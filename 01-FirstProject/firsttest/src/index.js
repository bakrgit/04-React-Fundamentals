
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseContextProvider } from './component/useContext'
//4-wrap all app with provider
ReactDOM.render(
    <UseContextProvider>
        <App />
    </UseContextProvider>
    , document.getElementById('root'))
