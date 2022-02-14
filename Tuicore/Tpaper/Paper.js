import React, { forwardRef } from 'react'
import "./Paper.css"
import "../Modal/Modal.css"
const Paper = forwardRef(({children, className, id, style}, ref) => {
    return (
        <div className={`TuiPaper-root TuiPaper-elevation ${className ? className : ""}`} id={id} ref={ref} style={style}>
            {children}
        </div>
    )
});

export default Paper;
