import React from 'react';

import { screen, render, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';

import { initBoard, gamePcs } from '../useTetrisHooks';
import { getPcs } from '../../../helpers/spec/getPcs';

beforeEach(() => {
    render(<Tetris initBoard={initBoard(gamePcs)} />);
});

//=====================
// [] - dropInterval suite
test('starting tetris should provoke invocations of drop async', () => {
    // dependencies
    const dom_tetris = screen.getByTestId('tetris_cont');
    const dom_startGame = screen.getByTestId('startGame');

    // [0] - start game
    fireEvent.click(dom_startGame);
});