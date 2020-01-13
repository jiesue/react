// const defaultSteta = {
//     num: 0
// }
export default (state = { test: 0 }, actions) => {
    const json = JSON.parse(JSON.stringify(state));
    // alert(actions.type)
    switch (actions.type) {
        case 'test1':
            json.num++;
            return json;

        case 'test2':
            json.num = json.num - 1;
            if (json.num < 0) {
                json.num = 0;
            }
            return json;
        default:
            return state;

    }


}