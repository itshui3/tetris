
import React from 'react';

import { screen, render, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';

import { initBoard, dummyPcs, gamePcs } from '../useTetrisHooks';
import { lineBoard } from '../assets/lineBoard';

import { getPcs } from '../../../helpers/spec/getPcs';

// control_left
// control_right

beforeEach(() => {
    render(<Tetris initBoard={initBoard(dummyPcs)} />);

    const dom_startGame = screen.getByTestId('startGame');
    fireEvent.click(dom_startGame);
});

test('yeet-0', () => {
    // assets
    const dom_tetris = screen.getByTestId('tetris_cont');
    const dom_left = screen.getByTestId('control_left');
    const dom_right = screen.getByTestId('control_right');
    const dom_downBtn = screen.getByTestId('control_down');

    // [0] - expect no static pcs
    const preSetupPcs = getPcs(dom_tetris);
    expect(preSetupPcs.staticPcsList.length).toBe(0);
    // [1] - set up board for line validation
    // [a] - right pieces
    for (let r = 1; r < 5; r++) {
        for (let i = 0; i < r; i++) {
            fireEvent.click(dom_right);
        }

        for (let d = 0; d < 22; d++) {
            fireEvent.click(dom_downBtn);
        }
    }
    // [b] - left pieces
    for (let l = 1; l < 6; l++) {
        for (let i = 0; i < l; i++) {
            fireEvent.click(dom_left);
        }

        for (let d = 0; d < 22; d++) {
            fireEvent.click(dom_downBtn);
        }
    }
    // [2] - sanity check that there are static pcs
    const preFirePcs = getPcs(dom_tetris);
    expect(preFirePcs.staticPcsList.length).toBeGreaterThan(0);
    // [3] - create lines
    for (let d = 0; d < 22; d++) {
        fireEvent.click(dom_downBtn);
    }
    // [4] - expect static pcs to have cleared
    const postLinePcs = getPcs(dom_tetris);
    expect(postLinePcs.staticPcsList.length).toBe(0);

});