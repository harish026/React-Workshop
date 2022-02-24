import React from "react";
import { useState,createContext,useContext } from "react";
var AppContext=createContext();
export default function GrandGrandParent(){
    var [vil]=useState("warangal");
    return(
        <AppContext.Provider value={vil}>
            <h1>This is grand Grand Parent {vil}</h1>
            <GrandParent></GrandParent>
        </AppContext.Provider>
    )
}
function GrandParent(){
   
    return(
        <div>
            <h1>This is Grand Parent </h1>
            <Parent></Parent>
        </div>
    )
}
function Parent(){
    
    return(
        <div>
            <h1>This is Parent </h1>
            <Children ></Children>
        </div>
    )
}
function Children(){
    
    return(
        <div>
            <h1>This is children</h1>
            <GrandChildren ></GrandChildren>
        </div>
    )
}
function GrandChildren(){
   var dataconsumer=useContext(AppContext) 
    return(
        <div>
            <h1>This is Grandchildren {dataconsumer}</h1>
        </div>
    )
}