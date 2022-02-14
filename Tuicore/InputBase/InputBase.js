import React from 'react'
import "./InputBase.css"
import {AdornmentJsx} from '../Assets/Root'

const ADORNMENT = ["TuiInputEndAdorned", "TuiInputStartAdorned"];

function InputBase({type, name, placeholder, value, className, id, onChange, startAdornment, endAdornment, varient}) {
    const startAdorned = startAdornment?  ADORNMENT[1] : "";
    const endAdorned = endAdornment?  ADORNMENT[0] : "";

    const {startJsxAdornment, endJsxAdornment}= AdornmentJsx(startAdornment, endAdornment);
    
    return (
        <div className={`TuiInputBase-root ${varient? varient : ""} ${className?className:""}`}>
            {startJsxAdornment?startJsxAdornment:""}
            <input type={type} name={name} placeholder={placeholder} value={value} className={`TuiInput-root ${startAdorned} ${endAdorned}`} onChange={onChange} id={id}/>
            {endJsxAdornment?endJsxAdornment:""}
        </div>
    )
}

export default InputBase;
