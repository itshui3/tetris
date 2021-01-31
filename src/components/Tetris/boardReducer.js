
import produce from 'immer'
import { emptyBoard } from './assets/emptyBoard.js'


const initBoard = {
    board: emptyBoard,
    // pieces
    activePc: {}
}

const boardReducer = (state, { type, action }) => {

    switch(type) {
        default:
            return state
    }
}

export {
    initBoard,
    boardReducer
}