export default function flightReducer(store = [], action) {
    debugger;
    store= [1, 2]
    if(action.type === "SAVE_FLIGHTS") {
        return action.payload;
    }

    if(action.type === "DELETE_FLIGHTS") {
        return [];
    }

    return store;
}