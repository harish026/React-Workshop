import React from "react";
import EmployeeDetailscomponent from "./EmployeeDetailscomponent";
export default function EmpList(props){
    return (
        <div>
            <h1>Employee List is Given Below...</h1>
            {props.empList.map(function(employee) {
                return (
                    <EmployeeDetailscomponent {...employee}></EmployeeDetailscomponent>
                )
            })}
        </div>
    )

}