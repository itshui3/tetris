
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

    const dom_startGame = screen.getByTestId('startGame');
    // dom_startGame
    fireEvent.click(dom_startGame);

    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                prefireCoords.push([r, c]);
            }

        }

    }

    // fire keyDown('s')
    // [0] - are there options I can configure to show the event fired? 

    const dom_leftCtrl = screen.getByTestId('control_left');
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
        expect(postfireCoords.has(pre[0]+'.'+(pre[1]-1))).toBeTruthy();
    });

});

// test('keyboard press \'d\' moves block to the south', () => {
//     const dom_tetrisCont = screen.getByTestId('tetris_cont');

//     // fire keyDown('s')
//     fireEvent.keyDown(
//         dom_tetrisCont, 
//         { key: 'd', code: 'KeyD' }
//         );

// });

// test('keyboard press \'f\' moves block to the south', () => {
//     const dom_tetrisCont = screen.getByTestId('tetris_cont');

//     // fire keyDown('s')
//     fireEvent.keyDown(
//         dom_tetrisCont, 
//         { key: 'f', code: 'KeyF' }
//         );

// });

// test('keyboard press \'e\' moves block to the south', () => {
//     const dom_tetrisCont = screen.getByTestId('tetris_cont');

//     // fire keyDown('s')
//     fireEvent.keyDown(
//         dom_tetrisCont, 
//         { key: 'e', code: 'KeyE' }
//         );

// });


// test('keyboard press \'w\' moves block to the south', () => {
//     const dom_tetrisCont = screen.getByTestId('tetris_cont');

//     // fire keyDown('s')
//     fireEvent.keyDown(
//         dom_tetrisCont, 
//         { key: 'w', code: 'KeyW' }
//         );

// });

// test('keyboard press \'r\' moves block to the south', () => {
//     const dom_tetrisCont = screen.getByTestId('tetris_cont');

//     // fire keyDown('s')
//     fireEvent.keyDown(
//         dom_tetrisCont, 
//         { key: 'r', code: 'KeyR' }
//         );

// });
