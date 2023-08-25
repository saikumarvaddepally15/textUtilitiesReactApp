import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import About from './components/About';
import { useState } from 'react';
import Form from './components/Form';
import Alert from './components/Alert';

function App() {
  const [mode,setMode]= useState('light');
  const [alert,showAlert]=useState(null);
  const setAlert=(message,type)=>{
    showAlert({
    msg: message,
    type:type
    });
  }
  const toggleMode=()=>{
    if(mode=='dark'){
      setMode('light')
      document.body.style.backgroundColor='white';
      setAlert(":You are in Light mode","success")
      document.tilte = 'TextUtils-lightMode';
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#202236';
      setAlert(":You are in Dark mode","success")
      document.tilte='TextUtils-Darkmode';
    } 
  }
  return (
<>
<Navbar mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Form heading = "Enter your Text here" buttonLabel="Convert Upper Case" mode={mode} setAlert={setAlert}/>

{/*<About/>*/}
</div>
</> 
  );
}

export default App;
