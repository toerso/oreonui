import React from 'react';
import './Button.css';
import {AdornmentJsx} from '../Assets/Root'

const VARIENT = ["outline", "contain", "default"];
const COLOR = ["primary", "secondary", "default"];
const SIZE = ["small", "medium", "large", "mobile"];

const ADORNMENT = ["TuiButtonEndAdorned", "TuiButtonStartAdorned"];

const Button = ({type, children, varient, color, size, onClick, className, id, startAdornment, endAdornment}) => {

    const startAdorned = startAdornment?  ADORNMENT[1] : "";
    const endAdorned = endAdornment?  ADORNMENT[0] : "";

    const varientPadString = "TuiButton-";
    const colorPadString = "TuiButtonBaseColor-";
    const sizePadString = "TuiButtonBaseSize-";

    let btnvarient = VARIENT.includes(varient)? varient : VARIENT[2];

    btnvarient = btnvarient.padStart(btnvarient.length + varientPadString.length, varientPadString);
    
    let btncolor = COLOR.includes(color)? color : COLOR[2];

    btncolor = btncolor.padStart(btncolor.length + colorPadString.length, colorPadString);

    let btnsize = SIZE.includes(size)? size : SIZE[1];

    btnsize = btnsize.padStart(btnsize.length + sizePadString.length, sizePadString);

    const {startJsxAdornment, endJsxAdornment}= AdornmentJsx(startAdornment, endAdornment);


    return (
        <button type= {type} className= {`TuiBase-root TuiButtonBase-root TuiButtonBase ${btnvarient} ${btncolor} ${btnsize} ${className?className:""} ${startAdorned} ${endAdorned}`} onClick= {onClick} id={id}>
            {startJsxAdornment?startJsxAdornment:""}
            {children}
            {endJsxAdornment?endJsxAdornment:""}
            <span className={`TuiRipple`}></span>
        </button>
    )
}

export default Button;