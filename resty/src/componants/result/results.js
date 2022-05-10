import './result.css';
import JSONPretty from "react-json-pretty";
export default function Results(props){
    
return(
    
<div className="result">
    <br/>
    
    {/* <section>{<JSONPretty state={props.da}></JSONPretty>}</section> */}
    <section>{<JSONPretty data={props.data}></JSONPretty>}</section>
</div>
)}