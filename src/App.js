import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import About from './components/About';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [mode,setMode]= useState('light');
  const toggleMode=()=>{
    if(mode=='dark'){
      setMode('light')
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#202236';
    } 
  }
  return (
<>
<Navbar mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<Form heading = "Enter your Text here" buttonLabel="Convert Upper Case" mode={mode}/>
{/*<About/>*/}
</div>
</> 
  );
}

export default App;
