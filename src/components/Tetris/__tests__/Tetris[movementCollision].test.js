// tests that mid-game keystrokes function correctly
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';

// handleKeys={['f', 'd', 's', 'r', 'w']}
let preAdjustCoords = [];
let dom_tetrisCont;

beforeEach(() => {
    preAdjustCoords = [];

    render(<Tetris />);

    const dom_startGame = screen.getByTestId('startGame');
    fireEvent.click(dom_startGame);

    dom_tetrisCont = screen.getByTestId('tetris_cont');
    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                preAdjustCoords.push([r, c]);
            }

        }

    }
    
});

test('active pc stops when reaching left wall', () => {
    const dom_leftCtrl = screen.getByTestId('control_left');

    let minY = Infinity;

    for (let i = 0; i < preAdjustCoords.length; i++) {
        let yCoord = preAdjustCoords[i][1];
        if (yCoord < minY) minY = yCoord;
    }

    for (let i = 0; i < minY; i++) {
        fireEvent.click(dom_leftCtrl);
    }

    let prefireCoords = [];

    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                prefireCoords.push([r, c]);
            }

        }

    }

    fireEvent.click(dom_leftCtrl);

    let postfireCoords = new Set();

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