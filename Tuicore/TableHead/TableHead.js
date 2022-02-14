import React from 'react'

function TableHead({children, className}) {
    return (
        <thead className={`TuiTableHead-Base ${className?className:""}`}>{children}</thead>
    )
}

export default TableHead
