import React, { forwardRef, useContext, useState } from 'react'
import './MenuListItem.css'
import {AdornmentJsx, HelperPadString} from '../Assets/Root'
import { inputContext } from '../Select/Select';


const MenuListItem = forwardRef(({key, value, children, className, startAdornment, endAdornment, padding}, ref) => {
    const context = useContext(inputContext);

    const paddingStr = HelperPadString(padding);

    const {startJsxAdornment, endJsxAdornment}= AdornmentJsx(startAdornment, endAdornment);

    const updateValue = e => {
        const {setvalue, inputRef, dropDownRef} = context;
        const {Display, Open, Close} = dropDownRef.current;

        setvalue(e.target.dataset.value);

        Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set.call(inputRef.current, e.target.dataset.value);
        inputRef.current.dispatchEvent(new Event("change", {bubbles: true}));

        Close();
    }

    return (
        <li key={key} className={`TuiBase-root TuiMenuListItemBase-root ${paddingStr} ${className?className:""}`} role="option" tabIndex="0" data-value={value} onClick={updateValue}>
            {startJsxAdornment?startJsxAdornment:""}
            {children}
            {endJsxAdornment?endJsxAdornment:""}
            <span className={`TuiRipple`}></span>
        </li>   
    )
})

export default MenuListItem;
