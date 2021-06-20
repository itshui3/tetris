
import React from 'react';

import { screen, render } from '@testing-library/react';

import Tetris from '../Tetris';

beforeEach(() => {
    render(<Tetris />);
});

test('it renders Tetris component', () => {

    const dom_TetrisCont = screen.getByTestId('tetris_cont');

    expect(dom_TetrisCont).toBeInTheDocument();
});

test('it renders a board with the right number of cols/rows', () => {

    const dom_TetrisCont = screen.getByTestId('tetris_cont');

    // rows
    expect(dom_TetrisCont.children.length).toBe(25);
    // cols
    expect(dom_TetrisCont.children[0].children.length).toBe(10);
});

test('it renders start button', () => {

    const dom_StartBtn = screen.getByText('Start Game');

    expect(dom_StartBtn).toBeInTheDocument();
});

test('it renders kill active piece button', () => {
    const dom_KillPcBtn = screen.getByText('kill active pc');

    expect(dom_KillPcBtn).toBeInTheDocument();
});