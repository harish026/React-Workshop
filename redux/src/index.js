import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import AppComponent from "./AppComponent";
import EmployeeCountComponent from "./EmployeeCountComponent";
import rootReducer from "./Reducers/index";

var appStore = createStore(rootReducer)

ReactDOM.render((
    <Provider store={appStore}>
        <EmployeeCountComponent></EmployeeCountComponent>
        <AppComponent></AppComponent>
    </Provider>
), document.getElementById("root"))


