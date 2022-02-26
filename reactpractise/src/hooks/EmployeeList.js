import { useState, useEffect} from "react";
import axios from "axios";
import EmployeeDetailscomponent from "../components/EmployeeDetailscomponent";
export default function EmployeeList(){
    var [empList,setempList]=useState([]);
    useEffect(()=>{
        var dataPromise=axios.get("https://localhost:5003/api/Book");
        dataPromise.then((response)=>{
           setempList(response.data);
        })
    })

    const GetData = () => {

        var dataPromise = Axios.get("https://localhost:5003/api/Book");
        dataPromise.then((response) => {
            setEmployeeList(response.data);
        })
    }
    function DeleteEmployee(event) {
        axios.delete("https://localhost:5003/api/Book" + event.target.bid).then(() => {
            alert("Employee is Deleted");
            GetData();
        })
    }

    return(
        <div>
        <h1>Employee List is Given Below...</h1>
        {empList.map((employee)=> {
            return (
                
                <EmployeeDetailscomponent key={empList.bid} Delete={DeleteEmployee} {...employee}></EmployeeDetailscomponent>
                

            )
        })}
    </div>
    )
}