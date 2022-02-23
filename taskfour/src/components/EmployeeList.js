import React from "react";
import "../css/emplist.css";
import EmployeeDetails from "./EmployeeDetails";
export default function EmployeeList(props){
    return (
        <div>
            <h1>Employee List </h1>
        <div className="emplist">
            
            {props.empList.map(function(employee) {
                return (
                    // <EmployeeDetails name={employee.name} id={employee.id} createdAt={employee.createdAt} ></EmployeeDetails>
                    <EmployeeDetails {...employee}></EmployeeDetails>
                )
            })}
        </div>
        </div>
    )

}