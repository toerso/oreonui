import React from 'react'
import {TblCellHelperPadString} from '../Assets/Root'

function TableDataCell({children, className, align, size, ...other}) {
    const cellAlignAndSize = TblCellHelperPadString(align, size);

    return (
        <td className={`TuiTableCell-Base ${cellAlignAndSize.align} ${cellAlignAndSize.size} ${className?className:""}`} scope="col" {...other}>{children}</td>
    )
}

export default TableDataCell;
