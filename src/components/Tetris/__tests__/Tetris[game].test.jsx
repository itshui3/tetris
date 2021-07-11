
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';

import { initBoard, gamePcs } from '../useTetrisHooks';

import { getPcs } from '../../../helpers/spec/getPcs';

beforeEach(() => {
    render(<Tetris initBoard={initBoard(gamePcs)} />);
});

//=====================
// [] - startGame suite
test('starting tetris should spawn an active pc', () => {
    const dom_tetris = screen.getByTestId('tetris_cont');

    const prefirePcs = getPcs(dom_tetris);
    expect(prefirePcs.activePcsList.length).toBe(0);

    const dom_startGame = screen.getByTestId('startGame');
    fireEvent.click(dom_startGame);

    const postfirePcs = getPcs(dom_tetris);
    expect(postfirePcs.activePcsList.length).toBeGreaterThanOrEqual(1);
});
// only an ended && reset game would have no pcs in play
test('tetris should only start if there are no pcs in play', () => undefined);

//====================
// [] - endGame suite
test('ending tetris should freeze active pc and prevent movement', () => undefined);
// vvv - leave this one for later, when I start doing drop interval testing
test('ending tetris should stop active pc from dropping asynchronously', () => undefined);

//=====================
// [] - resetGame suite
test('tetris resets only if game is ended', () => undefined);
// if there are no pcs, either the board has already been reset or no games have been played yet
test('tetris resets only if pieces are leftover', () => undefined);
test('tetris resets wipe active/static pcs', () => undefined);