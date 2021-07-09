
import React from 'react';

import { screen, render, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';

import { initBoard, dummyPcs } from '../useTetrisHooks';
import { lineBoard } from '../assets/lineBoard';

import { getPcs } from '../../../helpers/spec/getPcs';

/*
[] - init a board where a line is ready to be filled
[] - 
*/

const lastLinePreStatic = [[23, 0], [23, 1], [23, 2], [23, 3], [23, 4], [23, 6], [23, 7], [23, 8], [23, 9]];
const lastLinePostStatic = [[22, 5], [23, 5]];

beforeEach(() => {
    const testBoard = initBoard(dummyPcs);

    testBoard.board = lineBoard;
    render(<Tetris initBoard={testBoard} />);

    const dom_startGame = screen.getByTestId('startGame');
    fireEvent.click(dom_startGame);
});

test('yeet-0', () => {
    const dom_tetris = screen.getByTestId('tetris_cont');

    const preLinePcs = getPcs(dom_tetris);

    expect(preLinePcs.staticPcsList).toEqual(lastLinePreStatic);

    const dom_downBtn = screen.getByTestId('control_down');
    for (let i = 0; i < 22; i++) {
        fireEvent.click(dom_downBtn);
    }

    const postLinePcs = getPcs(dom_tetris);

    expect(postLinePcs.staticPcsList).toEqual(lastLinePostStatic);
});