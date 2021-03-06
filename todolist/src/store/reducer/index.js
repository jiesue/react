import { createStore, combineReducers, applyMiddleware } from 'redux';


import counterReducer from './counter';
import todoReducer from './todo';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import promise from 'redux-promise';

// 合并Reducer
// combineReducers
const appReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
});



// console.log('-----------------------');
// console.log(counter);
export default function (initialState) {
    // 原来的日志中间件先给去掉了，其实applyMiddleware的参数列表里面是可以放任意多个中间件的
    // let createStoreWithMiddleware = applyMiddleware(logger)(createStore)
    const logger = createLogger()
    // let store = createStore(appReducer, applyMiddleware(thunk, promise))
    let store = createStore(appReducer, applyMiddleware(thunk, promise, logger))
    return store
}
