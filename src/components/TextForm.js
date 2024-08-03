import React,{useState} from 'react'

function TextForm(props) {

    const[text,setText]=useState('');

    const clr=()=>{
      setText('');
    }

    const uprClk=()=>{
        let newText=text.toUpperCase()
        setText(newText);
        props.showAlert('Converted to Upper Case','success');
        
    }
    const lwrClk=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to Lower Case','success');
    }

    const cpy=()=>{
      let newText=document.getElementById("myBox");
      newText.select();
      navigator.clipboard.writeText(newText.value);
      props.showAlert('Copied to clipboard','success');
      }
    const remSpace=()=>{
      // let text=document.getElementById("myBox");
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert('Extra Spaces Removed','success');
      }

    const handleChange=(event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <div className="container" >
    <h3 style={{color: props.mode==="light"?'black':'white'}}>{props.heading}</h3>
  <div className="mb-3">
    <textarea className='form-control' style={{backgroundColor: props.mode==="dark"?'#525d90':'white', color: props.mode==="light"?'black':'white'}} onChange={handleChange} value={text} id='myBox' rows={8}></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={uprClk}> Convert to UpperCase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={lwrClk}> Convert to LowerCase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={clr}> Clear</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={cpy}> Copy</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={remSpace}> Remove extra space</button>
    </div>
    <div className="container" style={{color: props.mode==="light"?'black':'white'}}>
        <h4>Your text summary</h4>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 *(text.split(" ").filter((element)=>{return element.length!==0}).length)}  minutes needed to read</p>
        <h4>Preview</h4>
        <p>{text.length>0 ? text : "Nothing to preview"}</p>
    </div>
</>
  )
}

export default TextForm
