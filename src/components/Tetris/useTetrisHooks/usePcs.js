
import { useEffect } from 'react';
// parent hook
import { useBoard } from './useBoard';

import { BOARD_ACTIONS } from './boardReducer.js';

const { PULL_ACTIVE } = BOARD_ACTIONS;


export const usePcs = (reducer, init) => {

    const [boardState, dispatchBoard] = useBoard(reducer, init);

    useEffect(() => {

        if (!Object.keys(boardState.activePc).length && boardState.gameActive) { dispatchBoard({ type: PULL_ACTIVE }) }
    
    }, [boardState.activePc, boardState.gameActive]);

    return [
        boardState, 
        dispatchBoard, 

    ];
};