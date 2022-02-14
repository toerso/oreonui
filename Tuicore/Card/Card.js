import React from 'react'
import Paper from '../Tpaper/Paper'

function Card({children, id}) {
    return (
        <Paper className="TuiCard" id={id}>
            {children}
        </Paper>
    )
}

export default Card;

//|---------------------------------------------------------|
//| card and paper is same                                  |
//|---------------------------------------------------------
