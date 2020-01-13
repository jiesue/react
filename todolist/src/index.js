import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/reducer'
import { Provider } from "react-redux";
// import './index.css';
import App from './App';
import TodoList from './todolist';
// import * as serviceWorker from './serviceWorker';
const ReduxApp = (
    <Provider store={store()}>
        <App />
        <TodoList></TodoList>
    </Provider>
);
ReactDOM.render(ReduxApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
