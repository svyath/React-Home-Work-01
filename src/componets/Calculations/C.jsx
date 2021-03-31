import '../Input/Input.css';

function C (props){
    return(
        <button className="randNumbBtn" onClick={props.getNumber}>Get Number</button>
    )
}
    
export default C;