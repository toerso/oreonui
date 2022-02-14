import React from 'react'

function TableBody({children, className}) {
    return (
        <tbody className={`${className?className:""}`}>{children}</tbody>
    )
}

export default TableBody
