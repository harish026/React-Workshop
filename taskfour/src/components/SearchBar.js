import "../css/search.css"

export default function SearchBar(props){
    return(
        <input className="search"
        className='search' 
        type='search' 
        placeholder="Search Employees"
         onChange={props.handlechange} />
    )
}