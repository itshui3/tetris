
import './styles/_helpers.css'
import './styles/_tetrisBoard.css'
import React, { useEffect } from 'react'

import KeyboardEventHandler from 'react-keyboard-event-handler';

// cell style factories
// (stateAssets): renderUI
import { rightBorder, bottomBorder } from './assets/borderFactory.js'
import { isAPc } from './assets/cellRender.js'

// tetris state assets
import {
    useTetris,
    initBoard,
    BOARD_ACTIONS,
    boardReducer,
} from './useTetrisHooks'

const { KILL_ACTIVE } = BOARD_ACTIONS

const controls = {
    'e': BOARD_ACTIONS.UP,
    'f': BOARD_ACTIONS.RIGHT,
    'd': BOARD_ACTIONS.DOWN,
    's': BOARD_ACTIONS.LEFT,
}

function Tetris() {

    const [boardState, dispatchBoard] = useTetris(boardReducer, initBoard)
    // [e, f, d, s] - dispatchKeyActions

    // e - idk what htis supposed to do
    // f - move pc one unit right
    // s - move pc one unit down
    // d - move pc one unit left
    const receiveKeyPress = (key) => {
        // listen for key actions
        console.log('in receive keypress', key)
        dispatchBoard({ type: controls[key] })
    }

    // useEffect(() => {
    //     console.log('in compo boardState:', boardState)
    //     console.log('in compo dispatch:', dispatchBoard)
    // }, [])

return (
<>
<div className='tetris_cont'>

{
boardState.board.map((row, r_idx) => (
<div className='board_row' key={r_idx}>
    {
        row.map((staticCell, c_idx) => (

        <div className='board_cell' key={c_idx}
        style={{ 
            // ...determineBorder(r_idx, c_idx)
            ...rightBorder(c_idx), 
            ...bottomBorder(r_idx),
            // ...isAPc(staticCell, boardState.activePc, activeCoords: [r_idx, c_idx])
            ...isAPc(staticCell, boardState.activePc, [r_idx, c_idx])
            // ...isStaticPc(staticCell),
            // ...isActivePc(boardState.activePc, [r_idx, c_idx])
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

{/* key handling */}
<KeyboardEventHandler
handleKeys={['e', 'f', 'd', 's']}
onKeyEvent={(key, e) => receiveKeyPress(key)} 
/>

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
