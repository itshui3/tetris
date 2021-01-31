
import './styles/_helpers.css'
import './styles/_tetrisBoard.css'
import React, { useEffect } from 'react'

// cell style factories
// (stateAssets): renderUI
import { rightBorder, bottomBorder } from './assets/borderFactory.js'
import { isStaticPc, isActivePc } from './assets/cellRender.js'

// tetris state assets
import {
    useTetris,
    initBoard,
    BOARD_ACTIONS,
    boardReducer,
} from './useTetrisHooks'

const { KILL_ACTIVE } = BOARD_ACTIONS

function Tetris() {

    const [boardState, dispatchBoard] = useTetris(boardReducer, initBoard)

    useEffect(() => {
        console.log('in compo boardState:', boardState)
        console.log('in compo dispatch:', dispatchBoard)
    }, [])

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
            // perhaps these render protocols can be bundled: 
            // ie. [bordering(c_idx, r_idx) && isPc(isStaticPc, isActivePc)]
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
