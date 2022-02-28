import { combineReducers } from "redux";
import employeeReducer from "./employeeReducers";
//import movieReducer from "./movieReducer";
import flightReducer from "./flightReducers";

const rootReducer = combineReducers({
    employees: employeeReducer,
    flights: flightReducer,
    //movies: movieReducer
});

export default rootReducer