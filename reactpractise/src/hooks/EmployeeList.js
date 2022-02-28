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

    return(
        <div>
        <h1>Employee List is Given Below...</h1>
        {empList.map((employee)=> {
            return (
                
                <EmployeeDetailscomponent {...employee}></EmployeeDetailscomponent>
                /* <button value="delete"></button> */
                

            )
        })}
    </div>
    )
}