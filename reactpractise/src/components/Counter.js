export default function Counter(props){
    setInterval(() => {
        props.details.Counter = props.details.Counter + 1;
        console.log(props.details.Counter);
    }, 1000)
    props.details.Counter = props.details.Counter + 1;
    return (
        <div>
            <h1 >counter is: {props.details.Counter}</h1>
        </div>
    )
}