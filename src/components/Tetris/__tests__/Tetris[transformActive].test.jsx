
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';
import { initBoard, gamePcs } from '../useTetrisHooks';

import { getPcs } from '../../../helpers/spec/getPcs';

let dom_tetrisCont;
let dom_downCtrl;

beforeEach(() => {
    render(<Tetris initBoard={initBoard(gamePcs)} />);

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
    const postfireStaticList = staticPcsList;

    postfireStaticList.forEach((c) => {

        expect(prefireCoordsSet.has(`${c[0]}.${c[1]}`)).toBeTruthy();
    });

});

test('tests down action from bottom row spawns a new active pc', () => {
    // floor
    fireEvent.click(dom_downCtrl);

    const { activePcsSet } = getPcs(dom_tetrisCont);
    let prefireActiveCoords = activePcsSet;

    // transform
    fireEvent.click(dom_downCtrl);

    const { activePcsList } = getPcs(dom_tetrisCont);
    let postfireActiveList = activePcsList;

// it spawns a new active tetronimo
    postfireActiveList.forEach(c => {
        expect(prefireActiveCoords.has(`${c[0]}.${c[1]}`)).toBeFalsy();
    });

});