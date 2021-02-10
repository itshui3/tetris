
import produce from 'immer'
import { emptyBoard } from '../assets/emptyBoard.js'
import { buildPc } from '../assets/buildPc.js'
import { canHasMovement } from '../assets/canHasMovement'
import { transformPc } from '../assets/transformPc'
import { clearLines } from '../assets/clearLines'

const initBoard = {
    board: emptyBoard,
    // pieces
    activePc: {},
    /*
    {pivot[y, x], form, forms[...[]], color}
    */

    inWaitingPc: {},

    combo: 0,
    points: 0

}

const BOARD_ACTIONS = {
    BUILD_IN_WAITING: 'build_in_waiting',
    PULL_ACTIVE: 'pull_active',
    KILL_ACTIVE: 'kill_active',

    // keyPress handling
    UP: 'keyPress_up',
    RIGHT: 'keyPress_right',
    DOWN: 'keyPress_down',
    LEFT: 'keyPress_left',

    CW: 'rotate_cw', // expect shift form index to right
    CCW: 'rotate_ccw', // expect shift form index to left

    // updating board
    HIGHLIGHT: 'highlight_rows', 
    UPDATE: 'update_board',
}

const {
    // pc handling
    BUILD_IN_WAITING, PULL_ACTIVE, KILL_ACTIVE, 
    // keyPress handling
    UP, RIGHT, DOWN, LEFT, 
    // updating board
    HIGHLIGHT, UPDATE,
} = BOARD_ACTIONS

const boardReducer = (state, { type, payload }) => {

    switch(type) {

        case PULL_ACTIVE: 
            return produce(state, draft => {
                const builtPc = {...buildPc(), form: 0 }
                console.log('pulling active...', builtPc)
                draft.activePc = builtPc
                // draft.inWaitingPc = buildPc()
            })

        // case BUILD_IN_WAITING:
        //     return produce(state, draft => {
        //         draft.inWaitingPc = buildPc()
        //     })

        case KILL_ACTIVE:
            return produce(state, draft => {
                draft.activePc = {}
            })

        case UP: 
            console.log('reg keyPress: UP')
            return state

        case RIGHT: 
            const moveRightObj = canHasMovement(state.board, state.activePc, type)
            console.log('moveRightObj', moveRightObj)
            return produce(state, draft => {
                if (moveRightObj.canHas) {
                    draft.activePc.pivot = moveRightObj.pos
                }
            })

        case DOWN: 
            // cases: 
            // [0] validate => move()
            const moveDownObj = canHasMovement(state.board, state.activePc, type)
            console.log('moveDownObj', moveDownObj)
            if (moveDownObj.canHas) {
                return produce(state, draft => {
                    draft.activePc.pivot = moveDownObj.pos
                })

            // [1] transform(board)
            } else {
                return produce(state, draft => {
                    draft.board = transformPc(draft.activePc, draft.board)
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

        case HIGHLIGHT:
            return produce(state, draft => {
                // payload expects rows set
                payload.lines.forEach(r => {
                    draft.board[r] = new Array(draft.board[0].length).fill(2)
                })

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