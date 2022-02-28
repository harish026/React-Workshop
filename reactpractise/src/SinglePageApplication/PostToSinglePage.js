import React from 'react';
import axios from "axios"

export default class PostToApi extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList:[],
            bid:0,
            name:'',
            createdAt:''
        }
    }
handleChange=(event)=>{
this.setState({
    [event.target.id]:event.target.value
})
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Post Employee Details</p>
                <input
                    type="number"
                    name="bid"
                    placeholder="id"
                    onChange={this.handleChange}
                /><br/>
                <br/>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={this.handleChange}
                />
                <br/><br/>
                <input
                    type="date"
                    name="createdAt"
                    placeholder="createdAt"
                    onChange={this.handleChange}
                />
                <br/><br/>
                <button
                    type="submit"
                >
                    post
                </button>
                <h1>{this.state.bid}</h1><br/>
                <h1>{this.state.name}</h1><br/>
                <h1>{this.state.createdAt}</h1><br/>

                
            </form>
        )
    }

   

debugger;
    handleSubmit = (event) => {
        event.preventDefault();
        
        let empdet={
            bid:this.state.bid,
            name : this.state.name,
            createdAt : this.state.createdAt,
            fid : 0,
            cid : 0,
            nop : 0,
            amount : 0
        };
      debugger;
      axios.post("https://localhost:5003/api/Book",empdet).then((response)=>{
        alert("employee is created")
        this.getData();
    })  
    } 

}