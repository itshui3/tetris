
import produce from 'immer'
import { emptyBoard } from '../assets/emptyBoard.js'
import { buildPc } from '../assets/buildPc.js'
import { canHasMovement } from '../assets/canHasMovement'
import { transformPc } from '../assets/transformPc'
import { canHasRotation } from '../assets/canHasRotation'

const initBoard = {
    board: emptyBoard,
    // pieces
    activePc: {},
    /*
    {pivot[y, x], form, forms[...[]], color}
    */

    inWaitingPc: {},

    combo: 0,
    points: 0,

    gameActive: false,

}

const BOARD_ACTIONS = {
    START: 'start_game',
    END: 'end_game',

    PULL_ACTIVE: 'pull_active',
    KILL_ACTIVE: 'kill_active',

    // keyPress handling
    RIGHT: 'keyPress_right',
    DOWN: 'keyPress_down',
    LEFT: 'keyPress_left',

    CW: 'rotate_cw', // expect shift form index to right
    CCW: 'rotate_ccw', // expect shift form index to left

    // updating board
    HIGHLIGHT: 'highlight_rows', 
}

const {
    START, END,
    // pc handling
    PULL_ACTIVE, KILL_ACTIVE, 
    // keyPress handling
    RIGHT, DOWN, LEFT, 
    CW, CCW, 
    // updating board
    UPDATE,
} = BOARD_ACTIONS

const boardReducer = (state, { type, payload }) => {

    switch(type) {
        case START:
            console.log('start game init')
            return produce(state, draft => {
                draft.board = emptyBoard;
                draft.activePc = {};
                draft.gameActive = true;
            })

        case END: 
            console.log('end game reducer')
            return produce(state, draft => {
                draft.gameActive = false;
            })

        case PULL_ACTIVE: 
            return produce(state, draft => {
                const builtPc = {...buildPc(), form: 0 }
                draft.activePc = builtPc
            })

        case KILL_ACTIVE: 
            return produce(state, draft => {
                draft.activePc = {}
            })

        case RIGHT: 
            const moveRightObj = canHasMovement(state.board, state.activePc, type)
            return produce(state, draft => {
                if (moveRightObj.canHas) {
                    draft.activePc.pivot = moveRightObj.pos
                }
            })

        case DOWN: 
            const moveDownObj = canHasMovement(state.board, state.activePc, type)
            if (moveDownObj.canHas) {
                return produce(state, draft => {
                    draft.activePc.pivot = moveDownObj.pos
                })

            } else if (state.activePc && state.board) {
                return produce(state, draft => {
                    draft.board = transformPc(state.activePc, state.board)
                    draft.activePc = {}
                })
            }

        case LEFT: 
            const moveLeftObj = canHasMovement(state.board, state.activePc, type)
            return produce(state, draft => {
                if (moveLeftObj.canHas) {
                    draft.activePc.pivot = moveLeftObj.pos
                }
            })
        
        case CW:           
            const canHasCW = canHasRotation(state.board, state.activePc, CW)
            console.log('canHasCW', canHasCW)

            return produce(state, draft => {
                draft.activePc.form = canHasRotation(state.board, state.activePc, CW).form
            })
            

        case CCW:             
            const canHasCCW = canHasRotation(state.board, state.activePc, CCW)
            console.log('canHasCCW', canHasCCW)

            return produce(state, draft => {
                draft.activePc.form = canHasRotation(state.board, state.activePc, CCW).form
            })
        
        case UPDATE: 
            return produce(state, draft => {
                draft.board = payload
            })

        default: 
            return state
    }
}

export {
    initBoard,
    BOARD_ACTIONS,
    boardReducer,
}