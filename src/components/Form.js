import React,{useState} from 'react'

export default function Form(props) {
    const [text,setText]=useState("Enter your text here"); //State
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
    }
    const handleCapitalisedClick=()=>{
        let newText=text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText);
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
  
  return (
    <>
<div className="mb-3">
    <h2>{props.heading}</h2>
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange}id="exampleFormControlTextarea1" rows="6"></textarea>
</div>
<button className="btn btn-primary me-2" onClick={handleUpClick}>{props.buttonLabel}</button>
<button className="btn btn-primary me-2" onClick={handleLowerClick}>Lower Case</button>
<button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary" onClick={handleCapitalisedClick}>Capitalise Text</button>
<div className="container my-3">
    <h2>Your text summary</h2>
<p>Words:{text.split(" ").length} letters:{text.length}</p>
</div>
<div>
    <h3>preview</h3>
    <p>{text}</p>
</div>
</>
  );
}
