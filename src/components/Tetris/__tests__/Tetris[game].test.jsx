
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';

beforeEach(() => {
    render(<Tetris />);
});

//=====================
// [] - startGame suite
test('starting tetris should spawn an active pc', () => null);
// only an ended && reset game would have no pcs in play
test('tetris should only start if there are no pcs in play', () => null);

//=====================
// [] - endGame suite
test('ending tetris should freeze active pc and prevent movement', () => null);
// vvv - leave this one for later, when I start doing drop interval testing
test('ending tetris should stop active pc from dropping asynchronously', () => null);

//=====================
// [] - resetGame suite
test('tetris resets only if game is ended', () => null);
// if there are no pcs, either the board has already been reset or no games have been played yet
test('tetris resets only if pieces are leftover', () => null);
test('tetris resets wipe active/static pcs', () => null);