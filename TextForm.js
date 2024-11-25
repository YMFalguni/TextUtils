import React,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper Case was clicked" + text); 
        let newText = text.toUpperCase();  //for converting text to upper case
        setText(newText)  //updating the text value to newText i.e updating text to uppper case
    }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value) //firing an event for changing text 
    } 
    const handleLoClick = () =>{
     
      let newText = text.toLowerCase();  //for converting text to upper case
      setText(newText)  //updating the text value to newText i.e updating text to uppper case
  }
  const handleClearTextClick = () =>{
    let newText = ('');  //for clearing the text
    setText(newText)

  }
  const handleCopy = () =>{
    var text =document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    
  }
  //remove extra spaces
  const handleExtraSapces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ")); // replace all the extra spaces by single space 
  }
    const [text,setText] = useState('');

  return (
<>
    <div className="Container" style={{color: props.mode === 'dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange= {handleOnChange}style={{backgroundColor: props.mode === 'dark'? ' gray':'white',  color: props.mode === 'dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearTextClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSapces}> Remove Extra Sapces</button>
          { /* firing an event named as handleUpClick for changing the text to uppercase after clicking button  */}
    </div>
    <div className="continer my-3"  style={{color: props.mode === 'dark'? 'white':'#042743'}} >
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split("").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.lenght>0?text:"Enter something in above textBox to preview it here"}</p>
    </div>
</>

  )
}

// import React, {useState} from 'react'
// export default function TextForm(props) {
//   const handleUpClick = () =>{
//     // console.log("UpperCase Was Clicked"+text);
//     let newText = text.toUpperCase();
//     setText(newText)
//   }
//   const handleLowClick = () =>{
   
//     let newText = text.toLowerCase();
//     setText(newText)
//   }
//   const handleClearClick = () =>{
//     let newText = (" ");
//     setText(newText)
//   }
//   const handleOnChange = (event) => {
//     setText(event.target.value)//we csn change the value of text
//     // due to this event we can type in text area
//   }
//   const [text, setText] = useState(''); //use state Hook
//   return (
//     <>
//     <div>
//       <h1>{props.heading}</h1>
//         <div className="mb-3">
//         <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
//       </div>
//       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
//       <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
//       <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text </button>
//     </div>
//     <div className="container my=3">
//       <h2> Your Text Summary </h2>
//         <p>{text.split(" ").length}words and {text.length} characters</p>
//         <p>{0.0008 * text.split(" ").length} Minutes read</p>
//         <h2>Preview</h2>
//         <p>{text}</p>
//     </div>
//     </>
//   )
// }

