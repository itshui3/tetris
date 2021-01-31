
import produce from 'immer'
import { emptyBoard } from '../assets/emptyBoard.js'
import { buildInWaiting } from '../assets/buildInWaiting.js'
import { canHasMovement } from '../assets/canHasMovement'

const initBoard = {
    board: emptyBoard,
    // pieces
    activePc: [
        // 0 length activePc === none
    ],
    inWaitingPc: [
        // same as above^^^
    ]
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
}

const {
    // pc handling
    BUILD_IN_WAITING, PULL_ACTIVE, KILL_ACTIVE, 
    // keyPress handling
    UP, RIGHT, DOWN, LEFT,
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
            return produce(state, draft => {
                if (moveRightObj.canHas) {
                    draft.activePc = moveRightObj.pos
                }
            })

        case DOWN: 
            console.log('reg keyPress: DOWN')
            return state

        case LEFT: 
            console.log('reg keyPress: LEFT')
            const moveLeftObj = canHasMovement(state.board, state.activePc, type)
            return produce(state, draft => {
                if (moveLeftObj.canHas) {
                    draft.activePc = moveLeftObj.pos
                }
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