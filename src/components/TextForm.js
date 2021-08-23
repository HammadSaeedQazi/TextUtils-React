import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case !", "success");
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case !", "success");
  }

  const handleCopy = () => {
    var boxText = document.getElementById("myBox");
    boxText.select();
    navigator.clipboard.writeText(boxText.value);
    props.showAlert("Text Copied to clipboard !", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/ +/);
    setText(newText.join(' '));
    props.showAlert("Extra spaces managed !", "success");
  }

  const handleClearText = () => {
    setText("");
    setWordCount(0);
    props.showAlert("Text cleared !", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
    let enteredText = event.target.value;
    setWordCount(enteredText.trim().split(' ').length);
    if (enteredText.length === 0){
      setWordCount(0);
    }
    // console.log(event.target.value + " - " + event.target.value.length);
    // console.log(text + " - " + text.length);
    // console.log("--------------------");
  }

  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}
          placeholder='Enter text here' style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
          color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
        </div>
        <button className="btn btn-sm btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-sm btn-primary mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
        <button className="btn btn-sm btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-sm btn-primary mx-2" onClick={handleExtraSpaces} >Handle Extra Spaces</button>
        <button className="btn btn-sm btn-primary mx-2" onClick={handleClearText} >Clear Text</button>
      </div>
      <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p><b>{wordCount}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{(0.008 * wordCount).toFixed(3)}</b> minutes reading</p>
        <h3>Preview</h3>
        <p className='p-2 rounded-3' style={{border:`1px solid ${props.mode === 'dark' ? 'white' : 'black'}`}}>{text.length > 0 ? text : "Enter text above in the box to preview it here"}</p>
      </div>
    </>
  )
}
