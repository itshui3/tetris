
import produce from 'immer';
import { emptyBoard } from '../assets/emptyBoard.js';
import { buildPcFactory, gamePcs } from '../assets/buildPc.js';
import { canHasMovement } from '../assets/canHasMovement';
import { transformPc } from '../assets/transformPc';
import { canHasRotation } from '../assets/canHasRotation';

const initBoard = (gamePcs) => { 
    return {
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
        buildPc: buildPcFactory(gamePcs)
    };
}

// constructing while pointing at normal gamePcs
// const buildPc = buildPcFactory(gamePcs);

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
};

const {
    START, END,
    // pc handling
    PULL_ACTIVE, KILL_ACTIVE, 
    // keyPress handling
    RIGHT, DOWN, LEFT, 
    CW, CCW, 
    // updating board
    UPDATE,
} = BOARD_ACTIONS;

const boardReducer = (state, { type, payload }) => {

    switch(type) {
        case START:
            return produce(state, draft => {
                draft.board = emptyBoard;
                draft.activePc = {};
                draft.gameActive = true;
            });

        case END: 
            return produce(state, draft => {
                draft.gameActive = false;
            });

        case PULL_ACTIVE: 
            return produce(state, draft => {
                const builtPc = {...draft.buildPc(), form: 0 }
                draft.activePc = builtPc
            });

        case KILL_ACTIVE: 
            return produce(state, draft => {
                draft.activePc = {}
            });

        case RIGHT: 
            const moveRightObj = canHasMovement(state.board, state.activePc, type);
            return produce(state, draft => {
                if (moveRightObj.canHas) {
                    draft.activePc.pivot = moveRightObj.pos;
                }
            });

        case DOWN: 
            if (!Object.keys(state.activePc).length) { return state }

            const moveDownObj = canHasMovement(state.board, state.activePc, type);
            if (moveDownObj.canHas) {
                return produce(state, draft => {
                    draft.activePc.pivot = moveDownObj.pos;
                });

            } else {
                return produce(state, draft => {
                    draft.board = transformPc(state.activePc, state.board);
                    draft.activePc = {};
                });
            }

        case LEFT: 
            const moveLeftObj = canHasMovement(state.board, state.activePc, type);
            return produce(state, draft => {
                if (moveLeftObj.canHas) {
                    draft.activePc.pivot = moveLeftObj.pos;
                }
            })
        
        case CW:           
            return produce(state, draft => {
                draft.activePc.form = canHasRotation(state.board, state.activePc, CW).form;
            });
            

        case CCW:             
            return produce(state, draft => {
                draft.activePc.form = canHasRotation(state.board, state.activePc, CCW).form;
            });
        
        case UPDATE: 
            return produce(state, draft => {
                draft.board = payload;
            });

        default: 
            return state;
    }
}

export {
    initBoard,
    BOARD_ACTIONS,
    boardReducer,
};