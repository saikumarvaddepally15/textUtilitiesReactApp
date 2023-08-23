import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
//import Form from './components/Form';

function App() {
  return (
<>
<Navbar/>
<div className="container my-3">
{/*<Form heading = "Enter your Text here" buttonLabel="Convert Upper Case"/>*/}
<About/>
</div>
</> 
  );
}

export default App;
