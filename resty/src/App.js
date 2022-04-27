
import './App.css';
import Header from './componants/header/Header';
import { useState } from "react";

import Form from './componants/form/form';
import Footer from './componants/footer/footer';
import Results from './componants/result/results';
function App() {
  const [data, setData] = useState({});

  function onSubmit(e) {
    e.preventDefault();
    const mockRes = {
      Results: "Response",
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    };
    setData(mockRes);
  }
  return (
    <div className="App">
      <Header />
      <div className='main'>
      <Form onSubmit={onSubmit}/>
      {setData ? <Results data_1={data} /> : null}
      {/* <Results /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
