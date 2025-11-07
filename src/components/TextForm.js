import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = () => {
        setText('')
        props.showAlert("Text cleared!", "success");
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const getWordCount = () => {
        const words = text.trim().split(/\s+/);
        return text.trim().length === 0 ? 0 : words.length;
    }

    const getCharCount = () => {
        return text.replace(/\s/g, '').length;
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
            <p>{getWordCount()} words and {getCharCount()} characters</p>
            <p>{0.008 * getWordCount()} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter the text to Preview it."}</p>
        </div>
        </>
    )
}
