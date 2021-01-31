
import './styles/_tetrisBoard.css'
import React, { useReducer } from 'react'

import {
    initBoard,
    boardReducer
} from './boardReducer.js'

function Tetris() {

    const [boardState, dispatchBoard] = useReducer(boardReducer, initBoard)

return (
<>
<div className='tetris_cont'>

{
boardState.board.map((row, r_idx) => (
<div className='board_row' key={r_idx}>
    {
        row.map((cell, c_idx) => (

        <div className='board_cell' key={c_idx}>
            cell
        </div>

        ))
    }
</div>
))
}

</div>
</>
)
}

export default Tetris
