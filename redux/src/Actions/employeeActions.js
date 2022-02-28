export function setEmployeeList(employeeList) {
    debugger;
    return {
        type: "SAVE_EMPLOYEES",
        payload: employeeList
    }
}

export function deleteAllEmployees() {
    return {
        type: "DELETE_EMPLOYEES"
    }
}

export function deleteSpecificEmployees(empId) {
    return {
        type: "DELETE_SPECIFIC_EMPLOYEES",
        payload: empId
    }
}