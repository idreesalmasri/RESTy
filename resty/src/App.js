import './App.css';
import Header from "./componants/header/Header";
import { useState,useEffect,useReducer } from "react";
import historyReducer, {addAction,removeAction} from './reducder';
import Form from "./componants/form/form";
import Results from "./componants/result/results";
import Footer from "./componants/footer/footer";


const initialState = {
  history: [],
  count: 0,
  
}
function App() {
  
  const [state,dispatch] = useReducer(historyReducer,initialState);
  const [data, setData] = useState({});
  const [method, setMethod] = useState("Get");
  const [url, setUrl] = useState();
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(false);
  function urlHandel(e) {
    e.preventDefault();
    setUrl(e.target.value);
    
  }
  function handleBody(e) {
    e.preventDefault();
    setBody(e.target.value);
    
  }
  function changeMethod(e) {
    e.preventDefault();
    
    setMethod(e.target.value);
  }
  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (method === "Get") {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      dispatch(addAction(data));
    } else if (method === "Post") {
      const response = await fetch(url, {
        method: "Post",
        headers: {
          
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          JSON.parse(body)
          ),
      });
      const data = await response.json();
      setData(data);
    } else if (method === "Put") {
      const response = await fetch(url, {
        method: "Put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          JSON.parse(body)
        ),
      });
      const data = await response.json();
      setData(data);
      console.log(data);
      console.log(body);
    } else if (method === "Delete") {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const data = await response.json();
      setData(data);
    }
  }
  const removeData = new Promise((resolve)=>{setTimeout(resolve,15000)})
   
  useEffect(() => {
    removeData.then(()=>{
      setData({});
      setBody({});
      setLoading(false);
    }
    )
  }, []);
  return (
    <div id="app">
      <Header />
      <div className='main'>
      <Form
        changeMethod={changeMethod}
        handleBody={handleBody}
        urlHandel={urlHandel}
        onSubmit={onSubmit}
        state={state}
        
      />
      {loading ? <Results data={data}  /> : null}
      
      </div>
      <Footer />
    </div>
  );
}
export default App;