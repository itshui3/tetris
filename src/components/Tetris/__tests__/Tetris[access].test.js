
import React from 'react';

import { screen, render } from '@testing-library/react';

import Tetris from '../Tetris';

test('it renders Tetris component', () => {
    render(<Tetris />);

    const dom_TetrisCont = screen.getByTestId('tetris_cont');

    expect(dom_TetrisCont).toBeInTheDocument();
});

test('it renders a board with the right number of cols/rows', () => {
    render(<Tetris />);

    const dom_TetrisCont = screen.getByTestId('tetris_cont');

    // rows
    expect(dom_TetrisCont.children.length).toBe(25);
    // cols
    expect(dom_TetrisCont.children[0].children.length).toBe(10);
});