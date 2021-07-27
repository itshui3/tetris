
import './styles/_helpers.css';
import './styles/_tetrisBoard.css';
import React, { useEffect, useRef, useState } from 'react';

// outside components
import KeyboardEventHandler from 'react-keyboard-event-handler';

// cell style factories
// (stateAssets): renderUI
import { determineBorder } from './assets/borderFactory.js';
import { isAPc } from './assets/cellRender.js';

// line handling
import { validateLine } from './assets/validateLine.js';
import { clearLines } from './assets/clearLines.js';

// tetris state assets
import {
    useTetris,
    // initBoard,
    BOARD_ACTIONS,
    boardReducer,
} from './useTetrisHooks';

const { KILL_ACTIVE } = BOARD_ACTIONS;

const controls = {
    'f': BOARD_ACTIONS.RIGHT,
    'd': BOARD_ACTIONS.DOWN,
    's': BOARD_ACTIONS.LEFT,

    'r': BOARD_ACTIONS.CW,
    'w': BOARD_ACTIONS.CCW,
};

const lineActions = {
    // 'highlight': BOARD_ACTIONS.HIGHLIGHT, 
    'update': BOARD_ACTIONS.UPDATE,
};

function Tetris({ initBoard, dropSpeed }) {

    const startGameButtonBlurRef = useRef();
    const killActiveButtonBlurRef = useRef();
    const endGameButtonBlurRef = useRef();
    const resetGameButtonBlurRef = useRef();

    const [boardState, dispatchBoard] = useTetris(boardReducer, initBoard);
    const [dropInt, setDropInt] = useState(null);

    const dropFrequency = dropSpeed || 500;
    // dropInterval
    useEffect(() => {

    if (boardState.gameActive) {

        setDropInt( setInterval(() => {

            dispatchBoard({ type: BOARD_ACTIONS.DOWN });
        }, dropFrequency) );

    } else {
        if (dropInt) {
            setDropInt(null);
            clearInterval(dropInt);
        }
    }

    return () => clearInterval(dropInt);
        
    }, [boardState.gameActive]);

    useEffect(() => {
        // why is game not ending? 
        if (boardState.board[0].find((block) => block > 0)) {
            dispatchBoard({ type: BOARD_ACTIONS.END });
        }

        const lineObj = validateLine(boardState.board);
        // lineObj: { lines: [...Rows], points }
        
        if (lineObj.lines.length) {
            dispatchBoard({ 
                type: lineActions['update'], 
                payload: clearLines(boardState.board, lineObj.lines)
            });
            // clearLines: updatedBoard: [...[...], etc]
        }

    }, [boardState.board]);

    const receiveKeyPress = (key) => {
        // listen for key actions
        if (boardState.gameActive) {
            dispatchBoard({ type: controls[key] });
        }

    }

return (
<>
    <div className='tetris_cont' data-testid='tetris_cont'>

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
    </div>
    <div className='controllers_cont'>
        {/* rotations */}
        <div className='helpers_cont'>

            <button data-testid='control_ccw'
            onClick={() => receiveKeyPress('w')}
            >ccw</button>
            <button data-testid='control_cw'
            onClick={() => receiveKeyPress('r')}
            >cw</button>

        </div>

        {/* directions */}
        <div className='helpers_cont'>

            <button data-testid='control_left'
            onClick={() => receiveKeyPress('s')}
            >left</button>
            <button data-testid='control_down'
            onClick={() => receiveKeyPress('d')}
            >down</button>
            <button data-testid='control_right'
            onClick={() => receiveKeyPress('f')}
            >right</button>

        </div>

        {/* game */}
        <div className='helpers_cont'>
            <button className='helpers_btn' ref={startGameButtonBlurRef} data-testid='startGame'
            onClick={() => {
                dispatchBoard({type: BOARD_ACTIONS.START});
                startGameButtonBlurRef.current.blur();
            }}
            >Start Game</button>

            <button className='helpers_btn' ref={endGameButtonBlurRef} data-testid='endGame'
            onClick={() => {
                dispatchBoard({type: BOARD_ACTIONS.END});
                endGameButtonBlurRef.current.blur();
            }}
            >End Game</button>

            <button className='helpers_btn' ref={resetGameButtonBlurRef} data-testid='resetGame'
            onClick={() => {
                dispatchBoard({type: BOARD_ACTIONS.RESET});
                resetGameButtonBlurRef.current.blur();
            }}
            >Reset Game</button>

        </div>

        {/* mod */}
        <div className='helpers_cont'>
            <button className='helpers_btn' ref={killActiveButtonBlurRef} data-testid='killActive'
            onClick={() => {
                dispatchBoard({type: KILL_ACTIVE});
                killActiveButtonBlurRef.current.blur();
            }}
            >kill active pc</button>
        </div>

        {/* 
        key handling 
        KeyboardEventHandler - might not be super accessible as is seen from tests
        */}

        <KeyboardEventHandler
        handleKeys={['f', 'd', 's', 'r', 'w']}
        handleEventType='keydown'
        onKeyEvent={(key, e) => receiveKeyPress(key)}
        />
    </div>
</>
)
}

export default Tetris;