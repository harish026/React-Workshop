// function higherOrderComponent(props) {
//     function HOC() {
//         return (
      
            
//             <div class="card" style={{width: "18rem", margin: "50px" ,display:"inline-block"}}>
//             <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name}/>
//             <div className="card-body">
//             <h5 className="card-title">{props.name}</h5>
//             <p className="card-text">
//                <b> Id: </b>{props.id}<br></br>
//                <b>Joined At: </b>{props.createdAt}
//             </p>
//             <input type="button" class="btn btn-primary" value="More details"/>
            
//             </div>
//             </div>


        
//     )
//     }
//     return HOC;
// }
function HarishComponent() {
    var emp;
    return(
    <div>
        {
             emp={
                id:8,
                name:"harish",
                CreatedAt:"Today"
            }
        }
    </div>

    ) 
}

function HarshaComponent() {
    return <h1>This is Harsha</h1>
}

// var NewComponent = higherOrderComponent(HarishComponent)
// export var NewOtherComponent = higherOrderComponent(HarshaComponent)
// export default NewComponent;





function higherOrderComponent(Component) {
    function EmployeeDetailsComponent(props) {

        var styleObject =  {
            containerStyle: {
                width: "18rem", 
                margin: "20px", 
                display: "inline-block"
            }
        };
    
        return (
              <div className="card" style={styleObject.containerStyle}>
                  <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
                  <div className="card-body">
                      <div>
                          <div>
                            <p className="card-text">{props.id} <b>{props.createdAt}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Component props={props}></Component>
                        </div>
                        
                      </div>
                  </div>
              </div>
        )
    }
    return EmployeeDetailsComponent;
}

function WithButton(props) {
    return (
        <div>
            <input type="button" id={props.id} className="btn btn-primary" value="Delete" onClick={props.deleteEmployee} />
            <input style={{marginLeft: "5px"}} type="button" name={props.id} className="btn btn-primary" value="Update" onClick={props.updateEmployee} />
        </div>
    )
}

function WithouUpdateButton(props) {
    return (
        <div>
            <input type="button" id={props.id} className="btn btn-primary" value="Delete" onClick={props.deleteEmployee} />
        </div>
    )
}
function NoButton(props) {
    return (
        <div>
            <b style={{color: "red"}}>** User Cannot Perform any Action</b>
        </div>
    )
}

const NewComponent = higherOrderComponent(NoButton)
export default NewComponent;
export var NewOtherComponent = higherOrderComponent(WithouUpdateButton)