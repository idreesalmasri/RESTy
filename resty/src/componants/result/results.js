import './result.css';
import JSONPretty from "react-json-pretty";
var JSONPrettyMon = require('react-json-pretty/dist/monikai')
export default function Results(props){

return(
    <div className="result">
    <br/>
   <div className="method">

   
  {/* <span id="button" style={props.method === "Post" ? { backgroundColor: 'green' } : props.method === "Delete" ? { backgroundColor: 'red' } : props.method === "Put" ? { backgroundColor: 'yellow' , color:"black"} :props.method==="Get"?{backgroundColor: 'blue'} :{}} > {props.method}</span>  
  <span id='url'> {props.url} </span> */}
    </div> 
    <div className='result-container'>headers : <JSONPretty theme={JSONPrettyMon} id='json-pretty' data={props.headers} ></JSONPretty>
     Data:  <JSONPretty theme={JSONPrettyMon} id='json-pretty' data={props.data} ></JSONPretty></div>
  </div>

)}