import { DECREASE1, INCREASE1, DECREASE, INCREASE } from './actionTypes'

export const decreaseCreator = (value) => ({ type: DECREASE, value })
export const increaseCreator = (value) => ({ type: INCREASE, value })
export const decreaseCreator1 = (value) => ({ type: DECREASE1, value })
export const increaseCreator1 = (value) => ({ type: INCREASE1, value })
/*
export const increaseCreator = () => {
    return (dispatch)=>{
        axios.get('').then(res=>{
            dispatch({type:INCREASE,data:res.data})
        })
    }
}
*/