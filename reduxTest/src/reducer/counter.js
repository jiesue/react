// const defaultSteta = {
//     num: 0
// }
export default (state = { num: 0 }, actions) => {
    const json = JSON.parse(JSON.stringify(state));
    // alert(actions.type)
    switch (actions.type) {
        case 'increase':
            json.num++;
            return json;

        case 'decrease':
            json.num = json.num - 1;
            if (json.num < 0) {
                json.num = 0;
            }
            return json;
        default:
            return state;

    }


}