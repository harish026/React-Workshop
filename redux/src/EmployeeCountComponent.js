import React from "react";
import { connect } from "react-redux";

class EmployeeCountComponent extends React.Component {
    render() {
        debugger;
        return (
            <div>
                <h1>Total Employee Count: {this.props.employees.length}</h1>
            </div>
        )
    }   
}

function mapPropsToStore(store) {
    return {
        employees: store.employees
    }
}

export default connect(mapPropsToStore, null)(EmployeeCountComponent)