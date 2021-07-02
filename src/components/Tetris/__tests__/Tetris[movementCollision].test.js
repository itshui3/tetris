// tests that mid-game keystrokes function correctly
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';

import { getPcs } from '../../../helpers/spec/getPcs';

// handleKeys={['f', 'd', 's', 'r', 'w']}
let preAdjustCoords = [];
let dom_tetrisCont;

beforeEach(() => {
    preAdjustCoords = [];

    render(<Tetris />);

    const dom_startGame = screen.getByTestId('startGame');
    fireEvent.click(dom_startGame);

    dom_tetrisCont = screen.getByTestId('tetris_cont');

    // [0] - get all pcs in list (concerned with active pcs/tetronimo)
    const { activePcsList } = getPcs(dom_tetrisCont);
    preAdjustCoords = activePcsList;
    
});

// left wall collision
test('active pc stops when reaching left wall', () => {
    const dom_leftCtrl = screen.getByTestId('control_left');

    // [] - determine leftShift
    const { leftShift } = getPcs(dom_tetrisCont);

    // [] - shift to wall
    for (let i = 0; i < leftShift; i++) {
        fireEvent.click(dom_leftCtrl);
    }

    // [] - determine active tetronimo (list)
    const { activePcsList } = getPcs(dom_tetrisCont);
    let prefireCoords = activePcsList;

    // [] - fire movement attempt
    fireEvent.click(dom_leftCtrl);

    // [] - determine active tetronimo (set)
    const { activePcsSet } = getPcs(dom_tetrisCont);
    let postfireCoords = activePcsSet;

    // [] - assert that the location hasn't changed between firing movement
    prefireCoords.forEach(pre => {
        expect(postfireCoords.has(pre[0]+'.'+pre[1])).toBeTruthy();
    });

});

// right wall collision
test('active pc stops when reaching right wall', () => {
    const dom_rightCtrl = screen.getByTestId('control_right');

    let maxY = 0;

    for (let i = 0; i < preAdjustCoords.length; i++) {
        let yCoord = preAdjustCoords[i][1];
        if (yCoord > maxY) maxY = yCoord;
    }

    for (let i = 0; i < 9-maxY; i++) {
        fireEvent.click(dom_rightCtrl);
    }

    let prefireCoords = [];

    // [3] - get all pcs, return as list ( concerned with active tetronimo)
    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                prefireCoords.push([r, c]);
            }

        }

    }

    fireEvent.click(dom_rightCtrl);

    let postfireCoords = new Set();

    // [4] - get all pcs, return as Set (concerned with active tetronimo)
    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                postfireCoords.add(`${r}.${c}`);
            }

        }

    }


    prefireCoords.forEach(pre => {
        expect(postfireCoords.has(pre[0]+'.'+pre[1])).toBeTruthy();
    });

});