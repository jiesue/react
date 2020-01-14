import { DECREASE, INCREASE, ADDITEM, DELITEM } from './actionTypes'

export const decreaseCreator = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: DECREASE })
        }, 1000);
    }
}
export const increaseCreator = () => ({ type: INCREASE })
/* --------------------- */
export const delItemCreator = (index) => ({ type: DELITEM, index })

/* 异步的处理方法：其他不变 这个文件的代码改异步请求就行 */
export const addItemCreator = (value) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: ADDITEM, value: (Math.random() * parseInt(value))||0 })
        }, 2000);
    }
}
/*
export const increaseCreator = () => {
    return (dispatch)=>{
        axios.get('').then(res=>{
            dispatch({type:INCREASE,data:res.data})
        })
    }
}
*/