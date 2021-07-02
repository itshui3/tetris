
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';

import { getPcs } from '../../../helpers/spec/getPcs';

let dom_tetrisCont;
let dom_downCtrl;

beforeEach(() => {
    render(<Tetris />);

    const dom_startGame = screen.getByTestId('startGame');
    fireEvent.click(dom_startGame);

    dom_tetrisCont = screen.getByTestId('tetris_cont');

    const { downShift } = getPcs(dom_tetrisCont);

    dom_downCtrl = screen.getByTestId('control_down');

    for (let i = 0; i < downShift-1; i++) {
        fireEvent.click(dom_downCtrl);
    }
    
});

test('it sets up active pc one row above bottom', () => {

    const { downShift } = getPcs(dom_tetrisCont);

    expect(downShift).toBe(1);
});

test('it drops active pc to bottom row', () => {
    fireEvent.click(dom_downCtrl);

    const { downShift } = getPcs(dom_tetrisCont);

    expect(downShift).toBe(0);
});

test('tests down action from bottom row transforms active pc', () => {
    fireEvent.click(dom_downCtrl);

    const { activePcsSet } = getPcs(dom_tetrisCont);
    const prefireCoordsSet = activePcsSet;

    fireEvent.click(dom_downCtrl);

    const { staticPcsList } = getPcs(dom_tetrisCont);
    const postfireCoordsList = staticPcsList;

    postfireCoordsList.forEach((c) => {

        expect(prefireCoordsSet.has(`${c[0]}.${c[1]}`)).toBeTruthy();
    });

});

test('tests down action from bottom row spawns a new active pc', () => {
    fireEvent.click(dom_downCtrl);

    let activeCoords = new Set();
    const { activePcsSet } = getPcs(dom_tetrisCont);
    // [5]
    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                // these cells need to be tomato colored

                activeCoords.add(`${r}.${c}`);
            }

        }

    }

    fireEvent.click(dom_downCtrl);

    let postfireCoordsStatic = [];
    let postfireCoordsActive = [];

    // [6]
    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {

                if (dom_tetrisCont.children[r].children[c].style.backgroundColor === 'black') {
                    postfireCoordsStatic.push([r, c]);
                }
                
                if (dom_tetrisCont.children[r].children[c].style.backgroundColor !== 'black') {
                    postfireCoordsActive.push([r, c]);
                }

            }

        }

    }
// it transforms floored active to static blocks
    postfireCoordsStatic.forEach(c => {

        expect(activeCoords.has(`${c[0]}.${c[1]}`)).toBeTruthy();

    });
// it spawns a new active tetronimo
    postfireCoordsActive.forEach(c => {

        expect(activeCoords.has(`${c[0]}.${c[1]}`)).toBeFalsy();

    });

});