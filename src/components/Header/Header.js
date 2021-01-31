
import './_header.css'
import React from 'react'

import Typewriter from 'typewriter-effect'


function Header() {

return (
<>
<div className='header_cont'>
    <Typewriter
    onInit={(typewriter) => {
        typewriter.start().changeDelay(20).changeDeleteSpeed(10)
        .typeString('let\'s play...')
        .deleteAll()
        .typeString('Tetris')

    }

    } />
</div>
</>
)
}

export default Header
