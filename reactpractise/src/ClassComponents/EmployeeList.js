import { Component } from "react";
import axios from "axios";
import EmployeeDetailscomponent from "../components/EmployeeDetailscomponent";

export default class EmployeList extends Component{
    constructor(){
        super();
        this.state={
            empList:[]
        }
    }



    render(){
        return(
            <div>
            <h1>Employee List is Given Below...</h1>
            {this.state.empList.map((employee)=> {
                return (
                    
                    <EmployeeDetailscomponent delete={this.deleteEmployee} key={this.state.empList} {...employee}></EmployeeDetailscomponent>
                    /* <button value="delete"></button> */
                    

                )
            })}
        </div>
        )
    }
    deleteEmployee = (event) => {
        debugger;
        axios.delete("https://localhost:5003/api/Book/" + event.target.id).then(() => {
            alert("Employee is Deleted");
            this.getData();
        })
    }
    componentDidMount(){
        this.getData();
        
    }
    getData=()=>{
        var dataPromise=axios.get("https://localhost:5003/api/Book");
        dataPromise.then((response)=>{
            this.setState({
                empList:response.data
            })
        })
    }
}