
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

    // what I want is: 
    // which coordinates are occupied? 
    let prefireCoords = [];

    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (r === 0 && c === 0) {
                console.log(dom_tetrisCont.children[r].children[c]);
            }
            
        } 

    }

    const dom_startGame = screen.getByTestId('startGame');
    // dom_startGame

    // fire keyDown('s')
    fireEvent.keyDown(
        dom_tetrisCont, 
        { key: 's', code: 'KeyS' }
        );

    let postfireCoords = [];

});

test('keyboard press \'d\' moves block to the south', () => {
    const dom_tetrisCont = screen.getByTestId('tetris_cont');

    // fire keyDown('s')
    fireEvent.keyDown(
        dom_tetrisCont, 
        { key: 'd', code: 'KeyD' }
        );

});

test('keyboard press \'f\' moves block to the south', () => {
    const dom_tetrisCont = screen.getByTestId('tetris_cont');

    // fire keyDown('s')
    fireEvent.keyDown(
        dom_tetrisCont, 
        { key: 'f', code: 'KeyF' }
        );

});

test('keyboard press \'e\' moves block to the south', () => {
    const dom_tetrisCont = screen.getByTestId('tetris_cont');

    // fire keyDown('s')
    fireEvent.keyDown(
        dom_tetrisCont, 
        { key: 'e', code: 'KeyE' }
        );

});


test('keyboard press \'w\' moves block to the south', () => {
    const dom_tetrisCont = screen.getByTestId('tetris_cont');

    // fire keyDown('s')
    fireEvent.keyDown(
        dom_tetrisCont, 
        { key: 'w', code: 'KeyW' }
        );

});

test('keyboard press \'r\' moves block to the south', () => {
    const dom_tetrisCont = screen.getByTestId('tetris_cont');

    // fire keyDown('s')
    fireEvent.keyDown(
        dom_tetrisCont, 
        { key: 'r', code: 'KeyR' }
        );

});