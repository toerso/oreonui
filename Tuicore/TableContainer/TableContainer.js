import React from 'react'
import Paper from '../Tpaper/Paper'
import './TuiTableStyle.css'

function TableContainer({component, className, children, ...other}) {
    return (
       <Paper className={`TuiTable-container-root ${className?className:""}`}>{children}</Paper>
    )
}

export default TableContainer
