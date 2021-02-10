
import './styles/_helpers.css'
import './styles/_tetrisBoard.css'
import React, { useEffect, useRef, useState } from 'react'

import KeyboardEventHandler from 'react-keyboard-event-handler';

// cell style factories
// (stateAssets): renderUI
import { determineBorder } from './assets/borderFactory.js'
import { isAPc } from './assets/cellRender.js'

// line handling
import { validateLine } from './assets/validateLine.js'
import { clearLines } from './assets/clearLines.js'

// tetris state assets
import {
    useTetris,
    initBoard,
    BOARD_ACTIONS,
    boardReducer,
} from './useTetrisHooks'

const { KILL_ACTIVE } = BOARD_ACTIONS

const controls = {
    'f': BOARD_ACTIONS.RIGHT,
    'd': BOARD_ACTIONS.DOWN,
    's': BOARD_ACTIONS.LEFT,

    'r': BOARD_ACTIONS.CW,
    'w': BOARD_ACTIONS.CCW,
}

const lineActions = {
    // 'highlight': BOARD_ACTIONS.HIGHLIGHT, 
    'update': BOARD_ACTIONS.UPDATE,
}

function Tetris() {

    const startGameButtonBlurRef = useRef()
    const killActiveButtonBlurRef = useRef()

    const [boardState, dispatchBoard] = useTetris(boardReducer, initBoard)
    const [dropInt, setDropInt] = useState(null)

// dropInterval
useEffect(() => {

if (boardState.gameActive) {
    console.log('init drop interval')
    setDropInt( setInterval(() => {
        console.log('reiterating dropInterval')
        dispatchBoard({ type: BOARD_ACTIONS.DOWN })
    }, 500) )

} else {
    if (dropInt) {
        setDropInt(null)
        clearInterval(dropInt)
    }
}

return clearInterval(dropInt)
    
}, [boardState.gameActive])

    useEffect(() => {

        if (boardState.board[0].find((block) => block > 0)) {
            dispatchBoard({ type: BOARD_ACTIONS.END })
        }

        const lineObj = validateLine(boardState.board)
        // lineObj: { lines: [...Rows], points }
        
        if (lineObj.lines.size) {
            dispatchBoard({ 
                type: lineActions['update'], 
                payload: clearLines(boardState.board, lineObj.lines)
            })
            // clearLines: updatedBoard: [...[...], etc]
        }

    }, [boardState.board, dispatchBoard])

    const receiveKeyPress = (key) => {
        // listen for key actions
        if (boardState.gameActive) {
            dispatchBoard({ type: controls[key] })
        }

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

{/* helper buttons */}
<div className='helpers_cont'>
    <button className='helpers_btn' ref={startGameButtonBlurRef}
    onClick={() => {
        dispatchBoard({type: BOARD_ACTIONS.START})
        startGameButtonBlurRef.current.blur()
    }}
    >
        Start Game
    </button>
    <button className='helpers_btn' ref={killActiveButtonBlurRef}
    onClick={() => {
        dispatchBoard({type: KILL_ACTIVE})
        killActiveButtonBlurRef.current.blur()
    }}
    >
    kill active pc
    </button>
</div>

{/* key handling */}
<KeyboardEventHandler
handleKeys={['f', 'd', 's', 'r', 'w']}
onKeyEvent={(key, e) => receiveKeyPress(key)} 
/>


</div>
</>
)
}

export default Tetris
