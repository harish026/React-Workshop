export default function EmployeeDetailscomponent(props){
    //props.name = "Random Unknown Name";
    return (
        
          <div className="card" style={{width: "18rem", margin: "50px",display :"inline-block"}}>
          <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
              <div className="card-body">
                  <h5 className="card-title">{props.name}</h5>
                  <p className="card-text">{props.bid} <b>{props.createdAt}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <input type="button" id={props.bid} className="btn btn-primary" value="Delete" onClick={props.delete} />

              </div>
          </div>
    )
}