import React, { forwardRef } from 'react'

const TableFooter = forwardRef(({children, className, ...other}, ref) =>  {
    return (
        <tfoot className={`TuiTableFooter-Base ${className?className:""}`}>{children}</tfoot>
    )
})

export default TableFooter
