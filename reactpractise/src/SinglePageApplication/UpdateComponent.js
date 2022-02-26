import axios from 'axios';
import React from 'react';

export default class UpdateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            bid :0,
            name:'',
            creaedAt: ''
        }
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        debugger;
        return (
            <div>
                <form onSubmit={this.updateEmployee}>
                        <label>bid: </label>
                        <input type="number" name="accountNumber" placeholder={this.state.accountNumber} /><br></br><br></br>
                        <label>name: </label>
                        <input type="text" name="customerName" placeholder={this.state.customerName} onChange={this.changeHandler} /><br></br><br></br>
                        <label>createdAt: </label>
                        <input type="text" name="customerAddress" placeholder={this.state.customerAddress} onChange={this.changeHandler} /><br></br><br></br>
                        <input type="submit" value="Update" /><br></br><br></br>
                    </form>
            </div>
        )
    }

    updateEmployee = () => {
        var empdet={
            bid : this.state.bid,
            name: this.state.name,
            creaedAt : this.state.creaedAt
        }
        axios.put("https://localhost:5003/api/Book/"+this.state.bid,empdet).then(()=>{
            alert("Employee details Updated");  
        })    
    }

    componentDidMount() {
        debugger;
        alert(this.props.match.params.userId);
        axios.get("https://localhost:5003/api/Book/" +this.props.match.params.userId).then((response) => {
            this.setState({
                bid: response.data.bid,
                name:this.state.name,
                creaedAt : this.state.creaedAt
            })
        })       
    }
}