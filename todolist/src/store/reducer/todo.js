import { ADDITEM, DELITEM, UPDATE_INPUT } from '../actionTypes'


const defaultState = {
    input: '',
    list: []
}

export default (state = defaultState, actions) => {
    const json = JSON.parse(JSON.stringify(state));
    // alert(actions.type)
    switch (actions.type) {
        case ADDITEM:
            console.log("add");
            json.list.push(actions.value)
            return json;
            break;
        case DELITEM:
            console.log("del");
            json.list.splice(actions.index,1)
            return json;
            break;
        case UPDATE_INPUT:
            json.input = actions.newValue;
            return json;
            break;
        default:
            return state;

    }


}