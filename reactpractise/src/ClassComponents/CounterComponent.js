import { Component } from "react";

export default class CounterComponent extends Component{
    constructor(){
        super();
        this.state={
            counter : 1
        }
        setInterval(()=>{
            debugger;
            this.setState({
                counter : this.state.counter+1
            })
            console.log(this.state.counter);
        },1000)
    }
    render(){
        debugger;
        return <h1>counter value is : {this.state.counter}</h1>
    }
}