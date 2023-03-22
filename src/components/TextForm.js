import React,{useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClk=()=>{
      console.log("handleUpClk"+text)
      const newText=text.toUpperCase();
      setText(newText)
      props.showAlert("converted to Uppercase","success")
    }

    const handleLowClk=()=>{
      console.log("handleLowClk"+text)
      const newText=text.toLowerCase();
      setText(newText)
      props.showAlert("converted to Lowercase","success")
    }

    const handleClearClk=()=>{
      const newText="";
      setText(newText)
      props.showAlert("text cleared","success")
    }

    const handleReverse=()=>{
      let rev = text.split('').reverse().join('');
      setText(rev)
      props.showAlert("text reversed","success")
    }

    const handleInverse=()=>{
      let newText='';
      for(let i=0;i<text.length;i++){
        let char=text.charAt(i);
        if(char===char.toUpperCase()){
          newText+=char.toLowerCase();
        }
        else{
          newText+=char.toUpperCase();
        }
      }
      setText(newText)
      props.showAlert("text case inversed","success")
    }

    const handleCopy=()=>{
      let text=document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("text copied","success")
    }

    const handleExtra=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(' '))
    }



    const handleOnChan=(event)=>{
      setText(event.target.value);
    }

    const [text,setText]=useState('');
    // setText("idher Likh");

  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.head}</h1>
        <div className="mb-3">
            <textarea className="form-control"  value={text} id="myBox" onChange={handleOnChan} style={{backgroundColor : props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}} rows="12"> </textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClk}>click Uppercase</button>
        <button className='btn btn-danger mx-2' onClick={handleLowClk}>click Lowercase</button>
        <button className='btn btn-success mx-2' onClick={handleClearClk}>clear</button>
        <button className='btn btn-warning mx-2' onClick={handleReverse}>Reverse</button>
        <button className='btn btn-info mx-2' onClick={handleInverse}>Inverse</button>
        <button className='btn btn-dark mx-2' onClick={handleCopy}>CopyText</button>
        <button className='btn btn-secondary mx-2' onClick={handleExtra}>Remove Extra Spaces</button>
 
    
    </div>
    <div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summery</h2>
      <p><b>{text.length===0?text.split(" ").length=0:text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
      <p>ypu can read this in approximately <b>{0.008 * text.split(" ").length} per minute</b> </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
