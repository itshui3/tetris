
import produce from 'immer'
import { emptyBoard } from '../assets/emptyBoard.js'
import { buildInWaiting } from '../assets/buildInWaiting.js'
import { canHasMovement } from '../assets/canHasMovement'
import { transformPc } from '../assets/transformPc'
import { clearLines } from '../assets/clearLines'

const initBoard = {
    board: emptyBoard,
    // pieces
    activePc: [
        // 0 length activePc === none
    ],
    inWaitingPc: [
        // same as above^^^
    ],

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
                draft.activePc = draft.inWaitingPc
                draft.inWaitingPc = buildInWaiting()
            })

        case BUILD_IN_WAITING:
            return produce(state, draft => {
                draft.inWaitingPc = buildInWaiting()
            })

        case KILL_ACTIVE:
            return produce(state, draft => {
                draft.activePc = []
            })

        case UP: 
            console.log('reg keyPress: UP')
            return state

        case RIGHT: 
            const moveRightObj = canHasMovement(state.board, state.activePc, type)
            console.log('moveRightObj', moveRightObj)
            return produce(state, draft => {
                if (moveRightObj.canHas) {
                    draft.activePc = moveRightObj.pos
                }
            })

        case DOWN: 
            // cases: 
            // [0] validate => move()
            const moveDown1Obj = canHasMovement(state.board, state.activePc, type)
            if (moveDown1Obj.canHas) {
                return produce(state, draft => {
                    draft.activePc = moveDown1Obj.pos
                })

            // [1] transform(board)
            } else {
                return produce(state, draft => {
                    draft.board = transformPc(draft.activePc, draft.board)
                    draft.activePc = []
                    draft.combo = 0
                })
            }

        case LEFT: 
            const moveLeftObj = canHasMovement(state.board, state.activePc, type)
            return produce(state, draft => {
                if (moveLeftObj.canHas) {
                    draft.activePc = moveLeftObj.pos
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