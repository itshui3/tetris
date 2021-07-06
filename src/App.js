
import React, { useEffect } from 'react';
import './App.css';

import {
    Header,
    Tetris
} from './components';

import {
    initBoard, gamePcs, dummyPcs
} from './components/Tetris/useTetrisHooks';

function App() {

useEffect(() => {
    console.log(gamePcs, 'gamePcs');
    console.log(dummyPcs, 'dummyPcs');
}, []);

return (
<div className="centering_wrapper" data-testid="app_cont">
<div className='centered_cont'>

    <Header />
    <Tetris initBoard={initBoard(dummyPcs)} />

</div>
</div>
);
}

export default App;
