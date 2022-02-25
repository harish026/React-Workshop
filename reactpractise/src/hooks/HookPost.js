import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';

export default function HookPost() {

    var [bid, setabid] = useState(0);
    var [name, setname] = useState('');
    var [createdAt, setcreatedAt] = useState('');
    
    
    var onBidChange = (event) => {
        setabid  (
            event.target.value
        )
    }
    var onNameChange = (event) => {
        setname(
            event.target.value
        )
    }

    var onCreatedAt = (event) => {
        setcreatedAt(
            event.target.value
        )
    }

    var empdet={
        bid:bid,
        name:name,
        createdAt: createdAt
    }
function AddEmployee(event)
{
    axios.post("https://localhost:5003/api/Book",empdet).then((response)=>{
            alert("employee is created")
            this.getData();
        })

}
    return(
        <form onSubmit={AddEmployee}>
            <p>Post Employee Details</p>
            <input
                type="number"
                name="bid"
                placeholder="id"
                onChange={onBidChange}
            /><br/>
            <br/>
            <input
                type="text"
                name="name"
                placeholder="name"
                onChange={onNameChange}
            />
            <br/><br/>
            <input
                type="date"
                name="createdAt"
                placeholder="createdAt"
                onChange={onCreatedAt}
            />
            <br/><br/>
            <button
                type="submit"
            >
                post
            </button>
            <h1>{bid}</h1><br/>
            <h1>{name}</h1><br/>
            <h1>{createdAt}</h1><br/>

            
        </form>
    )
}