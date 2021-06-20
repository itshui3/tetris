
import './App.css';

import {
    Header,
    Tetris
} from './components'

function App() {
return (
<div className="centering_wrapper" data-testid="app_cont">
<div className='centered_cont'>

    <Header />
    <Tetris />

</div>
</div>
);
}

export default App;
