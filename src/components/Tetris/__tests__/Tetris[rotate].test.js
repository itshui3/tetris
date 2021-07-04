import React from 'react';

import { screen, render, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';
import { getPcs } from '../../../helpers/spec/getPcs';

import { initBoard, dummyPcs } from '../useTetrisHooks';

beforeEach(() => {
    render(<Tetris initBoard={initBoard(dummyPcs)} />);
});

test('it renders dummy pc', () => {
    const dom_tetris = screen.getByTestId('tetris_cont');

    const renderedPc = getPcs(dom_tetris);

    console.log(renderedPc);
});