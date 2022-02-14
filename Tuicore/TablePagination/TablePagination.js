import React, { forwardRef, useState} from 'react'
import MenuListItem from '../MenuListItem/MenuListItem'
import Select from '../Select/Select'

const TablePagination = forwardRef(({className}, ref) => {
    const [dataperPage, setdataperPage] = useState(5);

    return (
        <div className={`TuiTablePagination-Base ${className?className:""}`}>
            <div className="select">
                <Select name="Data-per-page" value={dataperPage}>
                    <MenuListItem value={5}>5</MenuListItem>
                    <MenuListItem value={10}>10</MenuListItem>
                    <MenuListItem value={200}>200</MenuListItem>
                    <MenuListItem value={2000}>2000</MenuListItem>
                </Select>
            </div>
        </div>
    )
})

export default TablePagination;
