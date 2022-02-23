import React, { Component } from "react";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";
import employeeList from "../data/Employee";
export default class FilterEmployeeComponent extends Component{
    constructor(){
        super();
        this.state={
            empList: employeeList,
            searchfield : ""
        }
        
    }
    render(){
        const employee=this.state.empList;
        const searchf=this.state.searchfield;
        const filteredEmployee=employee.filter(employee=>employee.name.toLowerCase().includes(searchf.toLowerCase()));
        return(
            <div style={{textAlign :"center", paddingRight:"30px"}}>
                <SearchBar handlechange={e=>this.setState({searchfield : e.target.value})}></SearchBar>
            <h2>search field is : {this.state.searchfield}</h2>
             <EmployeeList empList={filteredEmployee}></EmployeeList>
        </div>
        )
    }
}