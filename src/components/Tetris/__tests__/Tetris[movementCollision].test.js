// tests that mid-game keystrokes function correctly
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';
import { initBoard } from '../useTetrisHooks';

import { getPcs } from '../../../helpers/spec/getPcs';

// handleKeys={['f', 'd', 's', 'r', 'w']}
let dom_tetrisCont;

beforeEach(() => {

    render(<Tetris initBoard={initBoard} />);

    const dom_startGame = screen.getByTestId('startGame');
    fireEvent.click(dom_startGame);

    dom_tetrisCont = screen.getByTestId('tetris_cont');
    
});

// left wall collision
test('active pc stops when reaching left wall', () => {
    const dom_leftCtrl = screen.getByTestId('control_left');

    const { leftShift } = getPcs(dom_tetrisCont);

    for (let i = 0; i < leftShift; i++) {
        fireEvent.click(dom_leftCtrl);
    }

    const { activePcsList } = getPcs(dom_tetrisCont);
    let prefireCoords = activePcsList;

    fireEvent.click(dom_leftCtrl);

    const { activePcsSet } = getPcs(dom_tetrisCont);
    let postfireCoords = activePcsSet;

    prefireCoords.forEach(pre => {
        expect(postfireCoords.has(pre[0]+'.'+pre[1])).toBeTruthy();
    });

});

// right wall collision
test('active pc stops when reaching right wall', () => {
    const dom_rightCtrl = screen.getByTestId('control_right');

    const { rightShift } = getPcs(dom_tetrisCont);

    for (let i = 0; i < rightShift; i++) {
        fireEvent.click(dom_rightCtrl);
    }

    const { activePcsList } = getPcs(dom_tetrisCont);
    let prefireCoords = activePcsList;

    fireEvent.click(dom_rightCtrl);

    const { activePcsSet } = getPcs(dom_tetrisCont);
    let postfireCoords = activePcsSet;

    prefireCoords.forEach(pre => {
        expect(postfireCoords.has(pre[0]+'.'+pre[1])).toBeTruthy();
    });

});