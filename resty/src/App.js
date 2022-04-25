
import './App.css';
import Header from './componants/header/Header';
import Form from './componants/form/form';
import Footer from './componants/footer/footer';
import Results from './componants/result/results';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
      <Form />
      <Results />
      </div>
      <Footer />
    </div>
  );
}

export default App;
