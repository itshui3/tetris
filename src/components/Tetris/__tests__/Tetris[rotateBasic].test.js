import React from 'react';

import { screen, render, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';
import { getPcs } from '../../../helpers/spec/getPcs';

import { initBoard, dummyPcs } from '../useTetrisHooks';

const verticalTriPc = [ '0.5', '1.5', '2.5' ];
const horizontalTriPc = ['1.4', '1.5', '1.6'];

test('it rotates active pc ccw', () => {
    render(<Tetris initBoard={initBoard(dummyPcs)} />);

    const dom_startGame = screen.getByTestId('startGame');
    fireEvent.click(dom_startGame);

    const dom_tetris = screen.getByTestId('tetris_cont');

    const dom_ccw = screen.getByTestId('control_ccw');

    const before = getPcs(dom_tetris);

    verticalTriPc.forEach(v_pc => {
        expect(before.activePcsSet).toContain(v_pc);
    });


    fireEvent.click(dom_ccw);
    const after = getPcs(dom_tetris);

    horizontalTriPc.forEach(h_pc => {
        expect(after.activePcsSet).toContain(h_pc);
    });

});

test('it rotates piece cw', () => {
    render(<Tetris initBoard={initBoard(dummyPcs)} />);

    const dom_startGame = screen.getByTestId('startGame');
    fireEvent.click(dom_startGame);

    const dom_tetris = screen.getByTestId('tetris_cont');

    const dom_cw = screen.getByTestId('control_cw');

    const before = getPcs(dom_tetris);

    verticalTriPc.forEach(v_pc => {
        expect(before.activePcsSet).toContain(v_pc);
    });

    fireEvent.click(dom_cw);
    const after = getPcs(dom_tetris);

    horizontalTriPc.forEach(h_pc => {
        expect(after.activePcsSet).toContain(h_pc);
    });

});