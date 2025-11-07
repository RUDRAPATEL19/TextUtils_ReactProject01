import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        setText('')
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');   
    return (
        <>
        <div className="container" style={{color: props.mode === 'light'?'black' : 'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} 
                style={{backgroundColor: props.mode === 'light'?'white' : 'grey', 
                        color: props.mode === 'light'?'black' : 'white'}} id="myBox" rows="8">
            </textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light'?'black' : 'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter the text to Preview it."}</p>
        </div>
        </>
    )
}
