import { Component } from "react";
import ChildComponent from "./ChildComponent";
export default class TwowayBinding extends Component{
    constructor(){
        super();
        this.state={
            val : ""
        }
    }
    onChange = event => {
        this.setState({
          val: event.target.value
        })
      }

    render(){
        return (
            <div>
                <label>Enter Name :</label>
                <input onChange={this.onChange}></input>
                <p>name entered is {this.state.val}</p>
                <ChildComponent name={this.state.val}></ChildComponent>
            </div>
        )
    }
}