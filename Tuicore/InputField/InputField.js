import React from 'react'
import InputBase from '../InputBase/InputBase';
import "../InputBase/InputBase.css"

const VARIENT = ["TuiInputFieldBottomBoreder", "TuiInputFieldBottomBoreder-animated"]

function InputField({type, name, placeholder, value, className, id, onChange, varient, startAdornment, endAdornment}) {
    const animate = varient === "animate" ? VARIENT[1] : VARIENT[0];

    return (
        // <div className={`TuiInputBase-root ${animate}`}>
        //     <input type={type} name={name} placeholder={placeholder} value={value} className={`TuiInput-root ${className? className : ""}`} onChange={onChange}/>
        // </div>
        <InputBase type={type} name={name} placeholder={placeholder} value={value} className={`TuiInput-root ${className? className : ""}`} id={id} onChange={onChange} varient={animate} startAdornment={startAdornment} endAdornment={endAdornment}/>
    )
}

export default InputField
