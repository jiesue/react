import { DECREASE, INCREASE,ADDITEM,DELITEM } from './actionTypes'

export const decreaseCreator = () => ({ type: DECREASE })
export const increaseCreator = () => ({ type: INCREASE })
/* --------------------- */
export const delItemCreator = () => ({ type: ADDITEM })
export const addItemCreator = () => ({ type: ADDITEM })
/* 
export const increaseCreator = () => {
    return (dispatch)=>{
        axios.get('').then(res=>{
            dispatch({type:INCREASE,data:res.data})
        })
    }
} 
*/