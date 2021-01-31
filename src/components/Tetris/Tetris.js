
import './styles/_helpers.css'
import './styles/_tetrisBoard.css'
import React, { useEffect, useReducer } from 'react'

// cell style factories
// (stateAssets): renderUI
import { rightBorder, bottomBorder } from './assets/borderFactory.js'
import { isStaticPc, isActivePc } from './assets/cellRender.js'
/* 
isActivePc(
    boardState.activePc,
    [r_idx, c_idx].
): {
    backgroundColor: 'black'
} || {}
*/

// board reducer assets
import {
    initBoard,
    BOARD_ACTIONS,
    boardReducer,
} from './boardReducer.js'
const { PULL_ACTIVE, BUILD_IN_WAITING, KILL_ACTIVE } = BOARD_ACTIONS

function Tetris() {

    // batch this into a custom hook
    const [boardState, dispatchBoard] = useReducer(boardReducer, initBoard)
    useEffect(() => {
        // when active pc falls, kill it
        // this useEffect will handle by pulling active
        if (!boardState.activePc.length) { dispatchBoard({ type: PULL_ACTIVE }) }
        // init case, but also reset case
        if (!boardState.inWaitingPc.length) { dispatchBoard({ type: BUILD_IN_WAITING }) }

    }, [boardState])

return (
<>
<div className='tetris_cont'>

{
boardState.board.map((row, r_idx) => (
<div className='board_row' key={r_idx}>
    {
        row.map((cell, c_idx) => (

        <div className='board_cell' key={c_idx}
        style={{ 
            ...rightBorder(c_idx), 
            ...bottomBorder(r_idx),
            ...isStaticPc(cell),
            ...isActivePc(boardState.activePc, [r_idx, c_idx])
        }}
        >

        </div>

        ))
    }
</div>
))
}

{/* helper buttons */}
<div className='helpers_cont'>
    <button 
    className='helpers_btn'
    onClick={() => dispatchBoard({type: KILL_ACTIVE})}
    >
    kill active pc
    </button>
</div>

</div>
</>
)
}

export default Tetris
