import { Apps } from '@material-ui/icons'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import ReactDom from 'react-dom'
import Canvas2 from '../../../Canvas/Canvas2'
import IconButton from '../IconButton/IconButton'
import Paper from '../Tpaper/Paper'

const Modal = forwardRef(({children, className, id}, ref) => {
    const [display, setDisplay] = useState(false);

    useImperativeHandle(ref, () => ({
       Open: open,
       Close: close
    }))

    const open = () => {
        setDisplay(true);
    }

    const close = event => {
        setDisplay(false);
    }

    if(display) return ReactDom.createPortal(
        <div className="TuiPresentation-Base" role="presentation-popup">
            <div className={`TuiOverLoader-Base TuiModal-OverLoader`} onClick={close}/>
            {/* <Canvas2 className={`TuiOverLoader-Base TuiModal-OverLoader`} onClick={close}/> */}
            <Paper className={`TuiModalBase-root ${className?className:""}`} id={id}>
                <IconButton className={`TuiModalClose-Button`} varient="paperButton" onClick={close}><Apps/></IconButton>
                <div className="TuiModalContent">{children}</div>
            </Paper>
        </div>,
        document.body
    )
    
    return null;

});

export default Modal;
