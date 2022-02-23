import react,{ Component } from "react";
import axios from "axios";

export default class SBIData extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render(){
        return(
            <div style={{"textAlign":"center", "margin":"10%", "backgroundColor":"skyblue","padding":"20PX"}}>
                <h3 style={{"color":"green"}}>SBI {this.state.data.DISPTYP}</h3>
                <br />
                <div className="card" style={{"padding":"10px","margin":"20px"}}>
                    <div className="card-header">
                       <b style={{"color":"blue"}}> {this.state.data.DISPID} {this.state.data.SC_SUBSEC} {this.state.data.HN}</b>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.data.company}</h5>
                        <div class="alert alert-primary" role="alert">
                            Current Price : {this.state.data.pricecurrent}
                        </div>
                        <div class="alert alert-secondary" role="alert">
                            Previous Price : {this.state.data.priceprevclose}
                        </div>
                        <div class="alert alert-warning" role="alert">
                            average Price : {this.state.data.AVGP}
                        </div>
                        <div class="alert alert-success" role="alert">
                            Price Change :  {this.state.data.pricechange}
                        </div>
                        
                        <div class="alert alert-danger" role="alert">
                            Percentage of Price Change : {this.state.data.pricepercentchange}
                        </div>
                        <div class="alert alert-primary" role="alert">
                            last updated epoch : {this.state.data.lastupd_epoch}
                        </div>


                        <div class="alert alert-warning" role="alert">
                            Last Updated At : {this.state.data.lastupd}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    getData=()=>{
        //debugger;
        var dataPromise=axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
        dataPromise.then((response)=>{
            this.setState({
                data:response.data.data
            })
        })
    }
    componentDidMount(){
        //debugger;
        this.getData();
    }

}
