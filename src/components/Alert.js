import React from 'react'

function Alert(props) {
    const cap=(word)=>{
        let str=word.toLowerCase();
        return str.charAt(0).toUpperCase()+str.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{cap(props.alert.type)}</strong> : {props.alert.msg}
    </div>
  )
}

export default Alert
