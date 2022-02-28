import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import EmployeeDetailscomponent from '../components/EmployeeDetailscomponent';
import PostComponent from "./PostToSinglePage";
import UpdateComponent from './UpdateComponent';
export default class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Harish"
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderComponent></HeaderComponent>

                    <div style={{border: "1px solid red", padding: "10px", margin: "10px"}}>
                        <nav>
                        <Link style={{margin: "10px"}} to="post">AddEmployee</Link>
                        </nav>
                        <Route exact path="/" component={EmployeeDetailscomponent}></Route>
                        <Route exact path="/about" component={AboutComponent}></Route>
                        <Route exact path="/help" component={HelpComponent}></Route>
                        <Route exact path="/update/:userId" component={UpdateComponent}></Route>
                        <Route exact path="/post" component={PostComponent}></Route>
                    </div>

                    <FooterComponent></FooterComponent>
                </div>
            </BrowserRouter>
        )
    }
}

function HeaderComponent() {
    return (
        <div>
            <h1>This is Header Component</h1>
            <nav>
                <Link style={{margin: "10px"}} to="/">Home</Link>
                <Link style={{margin: "10px"}} to="help">Help</Link>
                <Link style={{margin: "10px"}} to="about">About</Link>
            </nav>
        </div>
    )
}

function FooterComponent() {
    return <h3>This is Footer Component</h3>
}

function HomeComponent() {
    return <h3>This is Footer Component</h3>
  
}

function AboutComponent() {
    return <h3>This is About Component</h3>
}

function HelpComponent() {
    return <h3>This is Help Component</h3>
}