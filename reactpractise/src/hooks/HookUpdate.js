import React, { useEffect,useState } from 'react';
import axios from "axios";

export default function HookUpdate(props){
    var [bid, setbid] = useState(0);
    var [name, setname] = useState('');
    var [createdAt, setcreatedAt] = useState('');

    useEffect(() => {
        axios.get("https://localhost:5003/api/Book${props.bid}").then((response) => {
            setbid(response.data.bid);
            setname(response.data.name);
            setcreatedAt(response.data.createdAt);
        })       
    },[])
    
    function updateEmployee(){
        var empdet={
            bid:bid,
            name:name,
            createdAt: createdAt
        }
        axios.put("https://localhost:5003/api/Book${props.bid}",empdet).then(()=>{
            alert("Employee details Updated");  
        })   
    }
    
    return (
        <div>
            <h1>Update Employee</h1>
            <form onSubmit={updateEmployee}>
            <input
                type="number"
                name="bid"
                placeholder="id"
                onChange={(e) => setbid(e.target.value)}
            /><br/>
            <br/>
            <input
                type="text"
                name="name"
                placeholder="name"
                onChange={(e) => setname(e.target.value)}
            />
            <br/><br/>
            <input
                type="date"
                name="createdAt"
                placeholder="createdAt"
                onChange={(e) => setcreatedAt(e.target.value)}
            />
            <br/><br/>
            <button
                type="submit"
            >
                post
            </button>
            <h1>{props.bid}</h1><br/>
            <h1>{props.name}</h1><br/>
            <h1>{props.createdAt}</h1><br/>
        </form>
        </div>
    )
}