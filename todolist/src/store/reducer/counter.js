// const defaultSteta = {
//     num: 0
// }
import { DECREASE, INCREASE,ADDITEM,DELITEM } from '../actionTypes'

export default (state = { num: 0 }, actions) => {
    const json = JSON.parse(JSON.stringify(state));
    // alert(actions.type)
    switch (actions.type) {
        case INCREASE:
            json.num++;
            return json;

        case DECREASE:
            json.num = json.num - 1;
            if (json.num < 0) {
                json.num = 0;
            }
            return json;
        default:
            return state;

    }


}