
// tests that mid-game keystrokes function correctly
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Tetris from '../Tetris';

// handleKeys={['f', 'd', 's', 'r', 'w']}
// which coordinates are occupied? 
let prefireCoords = [];
let dom_tetrisCont;

beforeEach(() => {
    prefireCoords = [];

    render(<Tetris />);

    const dom_startGame = screen.getByTestId('startGame');
    fireEvent.click(dom_startGame);

    dom_tetrisCont = screen.getByTestId('tetris_cont');
    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                prefireCoords.push([r, c]);
            }

        }

    }
});

test('keyboard press \'s\' moves block to the left', () => {
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

test('keyboard press \'d\' moves block to the south', () => {
    const dom_downCtrl = screen.getByTestId('control_down');
    fireEvent.click(dom_downCtrl);

    let postfireCoords = new Set();

    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                postfireCoords.add(`${r}.${c}`);
            }

        }

    }

    prefireCoords.forEach(pre => {
        expect(postfireCoords.has((pre[0]+1)+'.'+pre[1])).toBeTruthy();
    });

});

test('keyboard press \'f\' moves block to the right', () => {
    const dom_rightCtrl = screen.getByTestId('control_right');
    fireEvent.click(dom_rightCtrl);

    let postfireCoords = new Set();

    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                postfireCoords.add(`${r}.${c}`);
            }

        }

    }

    prefireCoords.forEach(pre => {
        expect(postfireCoords.has(pre[0]+'.'+(pre[1]+1))).toBeTruthy();
    });
});

/*
rotation movements
*/
// test('keyboard press \'w\' rotates block ccw', () => {
//     const dom_tetrisCont = screen.getByTestId('tetris_cont');

//     // fire keyDown('s')
//     fireEvent.keyDown(
//         dom_tetrisCont, 
//         { key: 'w', code: 'KeyW' }
//         );

// });

// test('keyboard press \'r\' rotates block cw', () => {
//     const dom_tetrisCont = screen.getByTestId('tetris_cont');

//     // fire keyDown('s')
//     fireEvent.keyDown(
//         dom_tetrisCont, 
//         { key: 'r', code: 'KeyR' }
//         );

// });
