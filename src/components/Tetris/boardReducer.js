
import produce from 'immer'
import { emptyBoard } from './assets/emptyBoard.js'
import { buildInWaiting } from './assets/buildInWaiting.js'

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
}

const { BUILD_IN_WAITING, PULL_ACTIVE, KILL_ACTIVE } = BOARD_ACTIONS

const boardReducer = (state, { type, action }) => {

    switch(type) {
        /*

        [0] - PULL_ACTIVE => console.log(activePc)
        [1] - BUILD_IN_WAITING => console.log(activePc)
        things change? 
        */

        case PULL_ACTIVE: 
            return produce(state, draft => {
                // does this assignment action leave me vulnerable
                // to mutations? 
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

        default:
            return state
    }
}

export {
    initBoard,
    BOARD_ACTIONS,
    boardReducer,
}