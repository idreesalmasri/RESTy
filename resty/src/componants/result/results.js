import './result.css';

export default function Results(props){

return(
    
<div className="result">

<h2 >{props.data_1.Results}</h2>
<span>{props.data_1.url}</span>
<br/>
<span>{props.data_1.method}</span>
<br/>
<span>{props.data_1.userId}</span>
<br/>
<span>{props.data_1.title}</span>

</div>
)}