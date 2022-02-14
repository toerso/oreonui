import React from 'react'

function Table({children, className, ...other}) {
    return (
        <table className={`TuiTable-Base ${className?className:""}`}>{children}</table>
    )
}

export default Table
