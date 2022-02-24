import { useState,useEffect } from "react";

export default function CounterComponent(){
    var [counter,setCounter] =useState(0);
    useEffect(()=>{
        console.log("hello 1");
    },[])
    useEffect(()=>{
        console.log("hello 2");
    })
    setTimeout(() => {
        setCounter(
            counter =counter+1
        );
    }, 1000);
    return (
        <div>
            <h1>counter value is : {counter}</h1>
        </div>
    )
}