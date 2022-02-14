export const AdornmentJsx = (startAdornment, endAdornment) => {

     if(startAdornment) return {
        startJsxAdornment: <span className={`TuiStartAdornment-Base-holder`}><div className={`TuiBase-root TuiStartAdornment-holder TuiStartAdornment-holder-padding`}>{startAdornment}</div></span>,
        endJsxAdornment: null
     } ;

    if(endAdornment)  return {
        startJsxAdornment: null,
        endJsxAdornment: <span className={`TuiEndAdornment-Base-holder`}><div className={`TuiBase-root TuiEndAdornment-holder TuiEndAdornment-holder-padding`}>{endAdornment}</div></span>
    };

    return {
        startJsxAdornment: null,
        endJsxAdornment: null
    }
        
}


export const TblCellHelperPadString = (align, size) => {
    const tblAlignPadString = "TuiTableCell-align-";
    const tblSizePadString = "TuiTableCell-size-";
    
    let ALIGN = align?align:"center";
    let SIZE = size?size:"small";

    ALIGN = ALIGN.padStart(ALIGN.length + tblAlignPadString.length, tblAlignPadString);
    SIZE = SIZE.padStart(SIZE.length + tblSizePadString.length, tblSizePadString)

    return {
        align: ALIGN, 
        size: SIZE
    }
}

export const HelperPadString = (padding) => {
    const paddingStr = "TuiMenuListItem-padding"
    
    let PADDINGSTR = padding?paddingStr:"";

    return PADDINGSTR;
}

export const getNodePosition = elem => {
    const rect = elem.getBoundingClientRect();

    return {
        width: rect.width,
        left: rect.left,
        top: rect.top
    }
};