import React, { forwardRef, useEffect, useRef, useLayoutEffect, useState, createContext } from 'react'
import Tooltip from '../Tooltip/Tooltip';
import ReactDom from 'react-dom'
import './Select.css'
import SelectList from '../SelectList/SelectList'
import {getNodePosition} from '../Assets/Root'
import {AdornmentJsx} from '../Assets/Root'
import { MdArrowDropDown} from "react-icons/md";

export const inputContext = createContext(null);

const Select = forwardRef(({name, value, children, onChange, onClick}, ref) => {
    const [selected, setSelectedvalue] = useState(value);
    const dropDownRef = useRef();
    const inputRef = useRef();

    const endAdornment = <MdArrowDropDown/>;
    const startAdornment = null;

    const {startJsxAdornment, endJsxAdornment}= AdornmentJsx(startAdornment, endAdornment);

    const openDropDown = event => {
        const {Display, Open, Close} = dropDownRef.current;
        Display? Close() : Open();
    }

    const popUpStyleWhenResize = event => {
        const node = document.getElementById(`TuiSelect-${name}`);
        const pos = getNodePosition(node);

        dropDownRef.current.SetStyles({...pos});
    }

    useLayoutEffect(() => {
        window.addEventListener("resize", popUpStyleWhenResize);

        return () => {
            window.removeEventListener("resize", popUpStyleWhenResize);
        }
    }, []);

    useLayoutEffect(() => {
        const node = document.getElementById(`TuiSelect-${name}`);
        const pos = getNodePosition(node);

        dropDownRef.current.SetStyles({...pos});
    }, []);

    return (
        <div id={`TuiSelect-${name}`}>
            <div className={`TuiInputBase-root TuiSelectBase-root TuiInputFieldBottomBoreder TuiBasicText-Style ${selected !== ""?"orain-selected":""}`} onClick={openDropDown}>
                <div className="TuiSelected-Value"><span className="orain-selected-value">{selected === "" ? name : selected}</span></div>
                <input name={name} ref={inputRef} aria-hidden="true" tabIndex="-1" className="TuiSelect-Input" value={selected} onChange={onChange}/>
                <div className={`orain-icon-fontsize`}>{endJsxAdornment}</div>
            </div>

            <inputContext.Provider value={{setvalue: setSelectedvalue, inputRef: inputRef, dropDownRef: dropDownRef}}>
                <SelectList ref={dropDownRef} inputRef={inputRef}>{children}</SelectList>
            </inputContext.Provider>
        </div>
    )
})

export default Select;
