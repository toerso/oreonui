import React from 'react'
import {TblCellHelperPadString} from '../Assets/Root'


function TableHeadCell({children, className, align, size, ...other}) {
    const cellAlignAndSize = TblCellHelperPadString(align, size);

    return (
       <th className={`TuiTableCell-Base TuiTableCell-Head ${cellAlignAndSize.align} ${cellAlignAndSize.size} ${className?className:""}`} scope="col">{children}</th>
    )
}

export default TableHeadCell;
