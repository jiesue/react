import { createStore, combineReducers, applyMiddleware } from 'redux';


import counterReducer from './counter';
import testReducer from './test';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import promise from 'redux-promise';

// 合并Reducer
const appReducer = combineReducers({
    counter: counterReducer,
    test: testReducer
});

/* 
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore( reducer, enhancer) // 创建数据存储仓库 

*/

export default function (initialState) {
    // 原来的日志中间件先给去掉了，其实applyMiddleware的参数列表里面是可以放任意多个中间件的
    // let createStoreWithMiddleware = applyMiddleware(logger)(createStore)
    const logger = createLogger()
    // let store = createStore(appReducer, applyMiddleware(thunk, promise))
    let store = createStore(appReducer, applyMiddleware(thunk, promise, logger))
    return store
}
