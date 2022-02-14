import React, { forwardRef, useImperativeHandle, useState,  createContext} from 'react'
import ReactDom from 'react-dom';
import Paper from '../Tpaper/Paper'
import './Tooltip.css'

export const context = createContext(null);

const Tooltip = forwardRef(({children, className, id, style}, ref) => {
    const [display, setDisplay] = useState(false);

    useImperativeHandle(ref, () => ({
        Display: display,
        Open: open,
        Close: close
    }))

    const open = () => {
        setDisplay(true);
    }

    const close = () => {
        setDisplay(false);
    }


    if(display)
        return (
            ReactDom.createPortal(
                <div className={`TuiPresentation-Base`} role="presentation-popup">
                    <div className={`TuiOverLoader-Base TuiTooltip-OverLoader`} onClick={close}/>
                    <Paper className={`TuiPopUpBase-root TuiTooltipBase-root ${className?className:""}`} id={id} style={style}>
                        <ul className={`TuiListBase-root`} role="listbox" tabIndex={-1}>
                            <context.Provider value={close}>
                                {children}
                            </context.Provider>
                        </ul>
                    </Paper>
                </div>,
                document.body
            )
        )
    return null;
});

export default Tooltip;
