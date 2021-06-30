
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';

let shift = NaN; 

let dom_tetrisCont
let dom_downCtrl;

beforeEach(() => {
// [] - start game
    render(<Tetris />);

    const dom_startGame = screen.getByTestId('startGame');
    fireEvent.click(dom_startGame);
// [] - place active pc 1 unit above lowest col
    let spawnCoords = [];
    let lowest = 0;

    dom_tetrisCont = screen.getByTestId('tetris_cont');
    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                spawnCoords.push([r, c]);
                if (r > lowest) lowest = r;
            }

        }

    }

    shift = 22-lowest;

    dom_downCtrl = screen.getByTestId('control_down');

    for (let i = 0; i < shift; i++) {
        fireEvent.click(dom_downCtrl);
    }
    
});

test('it sets up active pc one row above bottom', () => {
    let coords = [];
    let lowest = 0;
    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                coords.push([r, c]);
                if (r > lowest) lowest = r;
            }

        }

    }

    expect(lowest).toBe(22);
});

test('it drops active pc to bottom row', () => {
    let coords = [];

    let lowest = 0;
    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                coords.push([r, c]);
                if (r > lowest) lowest = r;
            }

        }

    }
    
});

test('on down action from bottom row spawns a new active pc', () => {
    let coords = [];

    let lowest = 0;
    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                coords.push([r, c]);
                if (r > lowest) lowest = r;
            }

        }

    }

});