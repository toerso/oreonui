import React from 'react'
import './IconButton.css'

const VARIENT = ["paperButton", "TuiIconButton"];

function IconButton({type, name, children, varient, className, onClick, id, dataRoll}) {
    const buttonVarient = VARIENT.includes(varient) ? varient : VARIENT[1];

    return (
        <>
            <button type={type? type : "button"} name={name} className={`TuiBase-root TuiButtonBase-root TuiIconButton-root ${buttonVarient} ${className? className : ""}`} onClick={onClick} id={id} data-roll= {dataRoll}>
                {children}
                <span className={`TuiRipple`}></span>
            </button>
        </>
    )
}

export default IconButton;
