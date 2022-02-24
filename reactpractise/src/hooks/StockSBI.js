import axios from "axios";
import { useState, useEffect} from "react";

export default function StockSBI(){
    var [data,setdata]=useState([]);
    
    useEffect(()=>{
        var dataPromise=axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
        dataPromise.then((response)=>{
            setdata(response.data.data);
        })
    },[]);

    return(
        <div style={{"textAlign":"center", "margin":"10%", "backgroundColor":"skyblue","padding":"20PX"}}>
            <h3 style={{"color":"green"}}>SBI {data.DISPTYP}</h3>
            <br />
            <div className="card" style={{"padding":"10px","margin":"20px"}}>
                <div className="card-header">
                   <b style={{"color":"blue"}}> {data.DISPID} {data.SC_SUBSEC} {data.HN}</b>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data.company}</h5>
                    <div class="alert alert-primary" role="alert">
                        Current Price : {data.pricecurrent}
                    </div>
                    <div class="alert alert-secondary" role="alert">
                        Previous Price : {data.priceprevclose}
                    </div>
                    <div class="alert alert-warning" role="alert">
                        average Price : {data.AVGP}
                    </div>
                    <div class="alert alert-success" role="alert">
                        Price Change :  {data.pricechange}
                    </div>
                    
                    <div class="alert alert-danger" role="alert">
                        Percentage of Price Change : {data.pricepercentchange}
                    </div>
                    <div class="alert alert-primary" role="alert">
                        last updated epoch : {data.lastupd_epoch}
                    </div>


                    <div class="alert alert-warning" role="alert">
                        Last Updated At : {data.lastupd}
                    </div>
                </div>
            </div>
        </div>
    )
}