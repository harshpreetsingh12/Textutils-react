import React ,{useState}from 'react'

export default function Textform(props) {


  const handleUpClick =()=>{
    // console.log("uppercase was clicked" +text);
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handlelowClick =()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleCopy=()=>{
    var text= document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraspaces=()=>{
    let newText = text.split(/[ ] +/);
    setText(newText.join(" "))
  }
   const handleclearclick=()=>{
    let newText= '';
    setText(newText)
  }
  const handleOnChange =(event)=>{
    // console.log("On change");
setText(event.target.value);
  }
  const [text,setText]=useState('');
    //text="new text"; //wrong way to cchange the state
    //setText("new text"); //correct way to change the state

return(
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey' ,color:props.mode==='light'?'black':'white'} }></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>Convert To Lowercase </button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy all</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleExtraspaces}>Remove extra spaces </button>
<button className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>Click to clear </button>
{/* <button className="btn btn-primary mx-3" onClick={handlefirstletClick}>Convert only first letter to uppercase</button> */}
{/* <button className="btn btn-primary mx-1" onClick={handlereplaceClick}>  Text replace  </button> */}
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your text summary is here</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!===0}).length} words and {text.length} characters</p>
      <p>In {0.008 * text.split(" ").length} minutes you can read this.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
)}

