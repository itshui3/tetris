import React from 'react';

import { screen, render, fireEvent, waitFor } from '@testing-library/react';

import Tetris from '../Tetris';

import { initBoard, gamePcs } from '../useTetrisHooks';
import { getPcs } from '../../../helpers/spec/getPcs';

beforeEach(() => {
    render(<Tetris initBoard={initBoard(gamePcs)} dropSpeed={1} />);
});

//=====================
// [] - dropInterval suite
test('starting tetris should provoke invocations of drop async', async () => {
    // dependencies
    const dom_tetris = screen.getByTestId('tetris_cont');
    const dom_startGame = screen.getByTestId('startGame');

    // [0] - start game
    fireEvent.click(dom_startGame);

    const before = getPcs(dom_tetris);

    // test for no-drop, and then 15 drops
    for (let i = 0; i < 16; i++) {
    // [1] - waitFor dropInterval to pass
        await waitFor(() => {
    // [2] - fetch pcs within async
            const after = getPcs(dom_tetris);
            const after_activePcs = after.activePcsList.map(pc => [pc[0]-i, pc[1]]);
    // [3] - test that active pieces dropped
            expect(before.activePcsList).toEqual(after_activePcs);
        });
    }

});