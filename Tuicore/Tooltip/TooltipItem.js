import React , {useContext}from 'react'
import {AdornmentJsx} from '../Assets/Root'
import {context} from "./Tooltip"

function TooltipItem({children, className, startAdornment, endAdornment}) {
    const closePop = useContext(context);

    const {startJsxAdornment, endJsxAdornment}= AdornmentJsx(startAdornment, endAdornment);
    const close = e => {
        closePop();
    }

    return (
        <li className={`TuiBase-root TuiTooltipItemBase-root ${className?className:""}`} onClick={close}>
            {startJsxAdornment?startJsxAdornment:""}
            {children}
            {endJsxAdornment?endJsxAdornment:""}
            <span className={`TuiRipple`}></span>
        </li>   
    )
}

export default TooltipItem
