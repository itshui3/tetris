
import React, { useEffect } from 'react';
import './App.css';

import {
    Header,
    Tetris
} from './components';

import {
    initBoard, gamePcs, dummyPcs
} from './components/Tetris/useTetrisHooks';

import { lineBoard } from './components/Tetris/assets/lineBoard';

function App() {
return (
<div className="centering_wrapper" data-testid="app_cont">
<div className='centered_cont'>

    <Header />
    <Tetris initBoard={{...initBoard(dummyPcs), board: lineBoard}} />

</div>
</div>
);
}

export default App;