import React,{useState} from 'react'

export default function Form(props) {
    const [text,setText]=useState("Enter your text here"); //State
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.setAlert("Converted to Upper Case","success");
    }

    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.setAlert("Converted to Lower Case","success");
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
        props.setAlert("clearled the text","success");
    }
    const handleCapitalisedClick=()=>{
        let newText=text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText);
        props.setAlert("Capitalised the text","success");
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const wordsCount =(sampelText)=>{
        var words=sampelText.match(/\S+/g);
        return {
            charcterNoSpaces: sampelText.replace(/s\s+/g,'').length,
            characters: sampelText.length,
            wrds:words?words.length:0,

        };


    }
  return (
   
    <>
<div className="mb-3">
    <h2 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange}id="exampleFormControlTextarea1" rows="6"></textarea>
</div>
<button className="btn btn-primary me-2" onClick={handleUpClick}>{props.buttonLabel}</button>
<button className="btn btn-primary me-2" onClick={handleLowerClick}>Lower Case</button>
<button className="btn btn-primary me-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary" onClick={handleCapitalisedClick}>Capitalise Text</button>
<div className="container my-3">
    <h2 style={{color:props.mode==='dark'?'white':'black'}}>Your text summary</h2>
<p style={{color:props.mode==='dark'?'white':'black'}}>Words:{wordsCount(text).wrds} letters:{wordsCount(text).charcterNoSpaces}</p>
</div>
<div>
    <h3 style={{color:props.mode==='dark'?'white':'black'}}>preview</h3>
    <p style={{color:props.mode==='dark'?'white':'black'}}>{text}</p>
</div>
</>
  );
}
