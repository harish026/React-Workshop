import React,{Component} from 'react';
import axios from 'axios';
export default class PostForm extends Component{
    constructor(){
        super();
        this.state={
            bid:0,
            name:"",
            createdAt: "",
            fid : 0,
            cid : 0,
            nop : 0,
            amount : 0
        }
    }
    handleChange=(event)=>{
        this.setState({ 
            [event.target.name]:event.target.value            
        })
    }
    handleSubmit=(event)=>{
        //event.preventDefault();
        let empdet={
            bid:this.state.bid,
            name : this.state.name,
            createdAt : this.state.createdAt,
            fid : 0,
            cid : 0,
            nop : 0,
            amount : 0
        }
        
        axios.post("https://localhost:5003/api/Book",empdet).then((response)=>{
            alert("employee is created")
            this.getData();
        })
    }
    // componentDidMount(){
    //     this.handleSubmit();
    // }
    render(){
        return(
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
    handleSubmit=(event)=>{
        //event.preventDefault();
        let empdet={
            bid:this.state.bid,
            name : this.state.name,
            createdAt : this.state.createdAt,
            fid : 0,
            cid : 0,
            nop : 0,
            amount : 0
        }
        
        axios.post("https://localhost:5003/api/Book",empdet).then((response)=>{
            alert("employee is created")
            this.getData();
        })
    }
}