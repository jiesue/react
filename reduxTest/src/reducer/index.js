import { createStore, combineReducers, applyMiddleware } from 'redux';


import counter from './counter';
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger'
// import promise from 'redux-promise';

// 合并Reducer
// combineReducers出问题
export const appReducer = {
    ...counter
};
console.log(appReducer);
export default function (initialState) {
    // 原来的日志中间件先给去掉了，其实applyMiddleware的参数列表里面是可以放任意多个中间件的
    // let createStoreWithMiddleware = applyMiddleware(logger)(createStore)
    // const logger = createLogger()
    // let store = createStore(appReducer, applyMiddleware(thunk, promise))
    let store = createStore(counter)
    return store
}
