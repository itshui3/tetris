
import './_header.css'
import React from 'react'

import Typewriter from 'typewriter-effect'


function Header() {

return (
<>
<header className='header_cont'>
    <Typewriter data-testid='header_typewriter'
    onInit={(typewriter) => {
        typewriter.start().changeDelay(20).changeDeleteSpeed(10)
        .typeString('let\'s play...')
        .deleteAll()
        .typeString('Tetris')

    }

    } />
</header>
</>
)
}

export default Header
