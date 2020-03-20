
import { INCREASE1, DECREASE1 } from '../actionTypes'
let defaultState = {
    num1: 0
}
export default (state=defaultState, actions) => {

    const json = JSON.parse(JSON.stringify(state));
    // alert(actions.type)
    switch (actions.type) {
        case INCREASE1:
            json.num1 = json.num1 + actions.value;
            return json;

        case DECREASE1:
            json.num1 = json.num1 - 1;
            if (json.num1 < 0) {
                json.num1 = 0;
            }
            return json;
        default:
            return state;

    }


}