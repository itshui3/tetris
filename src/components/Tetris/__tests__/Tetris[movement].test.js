
// tests that mid-game keystrokes function correctly
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';

// handleKeys={['f', 'd', 's', 'r', 'w']}
beforeEach(() => {
    render(<Tetris />);
});

test('keyboard press \'s\' moves block to the left', () => {

    const dom_tetrisCont = screen.getByTestId('tetris_cont');

    console.log(dom_tetrisCont, 'before keydown');

    // fire keyDown('s')
    fireEvent.keyDown(
        dom_tetrisCont, 
        { key: 's', code: 'KeyS' }
        );

    console.log(dom_tetrisCont, 'after keydown');

});

test('keyboard press \'d\' moves block to the south', () => {
    const dom_tetrisCont = screen.getByTestId('tetris_cont');

    console.log(dom_tetrisCont, 'before keydown');

    // fire keyDown('s')
    fireEvent.keyDown(
        dom_tetrisCont, 
        { key: 'd', code: 'KeyD' }
        );

    console.log(dom_tetrisCont, 'after keydown');
});

test('keyboard press \'f\' moves block to the south', () => {
    const dom_tetrisCont = screen.getByTestId('tetris_cont');

    console.log(dom_tetrisCont, 'before keydown');

    // fire keyDown('s')
    fireEvent.keyDown(
        dom_tetrisCont, 
        { key: 'f', code: 'KeyF' }
        );

    console.log(dom_tetrisCont, 'after keydown');
});

test('keyboard press \'e\' moves block to the south', () => {
    const dom_tetrisCont = screen.getByTestId('tetris_cont');

    console.log(dom_tetrisCont, 'before keydown');

    // fire keyDown('s')
    fireEvent.keyDown(
        dom_tetrisCont, 
        { key: 'e', code: 'KeyE' }
        );

    console.log(dom_tetrisCont, 'after keydown');
});


test('keyboard press \'w\' moves block to the south', () => {
    const dom_tetrisCont = screen.getByTestId('tetris_cont');

    console.log(dom_tetrisCont, 'before keydown');

    // fire keyDown('s')
    fireEvent.keyDown(
        dom_tetrisCont, 
        { key: 'w', code: 'KeyW' }
        );

    console.log(dom_tetrisCont, 'after keydown');
});

test('keyboard press \'r\' moves block to the south', () => {
    const dom_tetrisCont = screen.getByTestId('tetris_cont');

    console.log(dom_tetrisCont, 'before keydown');

    // fire keyDown('s')
    fireEvent.keyDown(
        dom_tetrisCont, 
        { key: 'r', code: 'KeyR' }
        );

    console.log(dom_tetrisCont, 'after keydown');
});