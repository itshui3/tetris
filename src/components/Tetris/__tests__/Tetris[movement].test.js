
// tests that mid-game keystrokes function correctly
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';
import { initBoard } from '../useTetrisHooks';

import { getPcs } from '../../../helpers/spec/getPcs';

// handleKeys={['f', 'd', 's', 'r', 'w']}
// which coordinates are occupied? 
let prefireCoords = [];
let dom_tetrisCont;

beforeEach(() => {
    prefireCoords = [];

    render(<Tetris initBoard={initBoard} />);

    const dom_startGame = screen.getByTestId('startGame');
    fireEvent.click(dom_startGame);

    dom_tetrisCont = screen.getByTestId('tetris_cont');

    // [0] - get all active & static pcs in array (concerned wtih active tetronimo)
    const { activePcsList } = getPcs(dom_tetrisCont);
    prefireCoords = activePcsList;

});

test('keyboard press \'s\' moves block to the left', () => {
    const dom_leftCtrl = screen.getByTestId('control_left');
    fireEvent.click(dom_leftCtrl);

    // [1] - get all active & static pcs in set (concerned with active tetronimo)
    const { activePcsSet } = getPcs(dom_tetrisCont);
    let postfireCoords = activePcsSet;

    prefireCoords.forEach(pre => {
        expect(postfireCoords.has(pre[0]+'.'+(pre[1]-1))).toBeTruthy();
    });

});

test('keyboard press \'d\' moves block to the south', () => {
    const dom_downCtrl = screen.getByTestId('control_down');
    fireEvent.click(dom_downCtrl);

    // [2] - get all active & static pcs in set (concerned with active tetronimo)
    const { activePcsSet } = getPcs(dom_tetrisCont);
    let postfireCoords = activePcsSet;

    prefireCoords.forEach(pre => {
        expect(postfireCoords.has((pre[0]+1)+'.'+pre[1])).toBeTruthy();
    });

});

test('keyboard press \'f\' moves block to the right', () => {
    const dom_rightCtrl = screen.getByTestId('control_right');
    fireEvent.click(dom_rightCtrl);

    // [3] - get all active & static pcs in set (concerned with active tetronimo)
    const { activePcsSet } = getPcs(dom_tetrisCont);
    let postfireCoords = activePcsSet;

    prefireCoords.forEach(pre => {
        expect(postfireCoords.has(pre[0]+'.'+(pre[1]+1))).toBeTruthy();
    });
});
