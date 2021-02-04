
import './styles/_helpers.css'
import './styles/_tetrisBoard.css'
import React, { useEffect } from 'react'

import KeyboardEventHandler from 'react-keyboard-event-handler';

// cell style factories
// (stateAssets): renderUI
import { determineBorder } from './assets/borderFactory.js'
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

    /* handles line validation async:
        runs: when boardState.board updates
        [0] on Init
        [1] on pcTransform

        expect: call validateLine()
        validateLine should perform effects on setTimeout to stutter their effects
        as well as recursively call itself upon validating line successfully
        validateLine should also determine the number of lines & times it has
        called itself
    */
    useEffect(() => {
        // what other cases will trigger this useEff?
        // [0] - init tetris case
    }, [boardState.board])

    const receiveKeyPress = (key) => {
        // listen for key actions
        dispatchBoard({ type: controls[key] })
    }

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
            ...determineBorder(r_idx, c_idx),
            ...isAPc(staticCell, boardState.activePc, [r_idx, c_idx])
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
