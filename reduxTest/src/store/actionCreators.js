import { DECREASE, INCREASE } from './actionTypes'

export const decreaseCreator = () => ({ type: DECREASE })
export const increaseCreator = () => ({ type: INCREASE })
/* 
export const increaseCreator = () => {
    return (dispatch)=>{
        axios.get('').then(res=>{
            dispatch({type:INCREASE,data:res.data})
        })
    }
} 
*/