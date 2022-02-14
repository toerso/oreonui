import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import ReactDom from 'react-dom';
import Paper from '../Tpaper/Paper'

const Tooltip = forwardRef(({children, className, id, style, inputRef}, ref) => {
    const [display, setDisplay] = useState(false);
    const [styles, setStyles] = useState({top: 0, left: 0, width: 0});


    const open = () => {
        setDisplay(true);
    }

    const close = () => {
        setDisplay(false);
    }

    useImperativeHandle(ref, () => ({
        Display: display,
        SetStyles: setStyles,
        Open: open,
        Close: close, 
    }), [display])


    if(display)
        return (
            ReactDom.createPortal(
                <div className={`TuiPresentation-Base`} role="presentation-popup">
                    <div className={`TuiOverLoader-Base TuiTooltip-OverLoader`} onClick={close}/>
                    <Paper className={`TuiPopUpBase-root TuiSelectItemBase-root ${className?className:""}`} id={id} style={styles}>
                        <ul className={`TuiListBase-root`} role="listbox" tabIndex="-1">
                            {children}
                        </ul>
                    </Paper>
                </div>,
                document.body
            )
        )
    return null;
});

export default Tooltip;
