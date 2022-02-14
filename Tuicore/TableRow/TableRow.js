import React from 'react'

function TableRow({className, children}) {
    return (
        <tr className={`TuiTableRow-Base ${className?className:""}`} >{children}</tr>
    )
}

export default TableRow
