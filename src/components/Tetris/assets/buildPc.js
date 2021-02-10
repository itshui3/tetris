


const Iblock = {
    pivot: [0, 1],
    forms: [
        [ [0, -1], [0, 1], [0, 2] ],
        [ [-1, 0], [1, 0], [2, 0] ],
        [ [0, -2], [0, 1], [0, -1] ],
        [ [-2, 0], [-1, 0], [1, 0] ],
    ],
    color: 'cyan'
}

const Jblock = {
    pivot: [1, 1],
    forms: [
        [ [-1, -1], [0, -1], [0, 1] ],
        [ [-1, 0], [-1, 1], [1, 0] ],
        [ [0, -1], [0, 1], [1, 1] ],
        [ [1, -1], [1, 0], [-1, 0] ]
    ],
    color: 'black'
}

const Lblock = {
    pivot: [1, 1],
    forms: [
        [ [0, -1], [0, 1], [-1, 1] ], 
        [ [-1, 0], [1, 0], [1, 1] ],
        [ [1, -1], [0, -1], [0, 1] ],
        [ [-1, -1], [-1, 0], [1, 0] ]
    ],
    color: 'black'
}

const Oblock = {
    pivot: [0, 0],
    forms: [
        [ [1, 0], [0, 1], [1, 1] ]
    ],
    color: 'yellow'
}

const Sblock = {
    pivot: [1, 1],
    forms: [
        [ [0, -1], [-1, 0], [-1, 1] ],
        [ [-1, 0], [0, 1], [1, 1] ],
        [ [1, -1], [1, 0], [0, 1] ],
        [ [-1, -1], [0, -1], [1, 0] ]
    ],
    color: 'black'
}

const Tblock = {
    pivot: [1, 1],
    forms: [
        [ [0, -1], [-1, 0], [0, 1] ],
        [ [-1, 0], [0, 1], [-1, 0] ],
        [ [0, -1], [0, 1], [-1, 0] ],
        [ [0, 1], [-1, 0], [1, 0] ]
    ],
    color: 'orchid'
}

const Zblock = {
    pivot: [1, 1],
    forms: [
        [ [-1, -1], [0, -1], [0, 1] ],
        [ [-1, 1], [0, 1], [-1, 0] ],
        [ [0, -1], [1, 0], [1, 1] ],
        [ [-1, 0], [0, -1], [-1, 1] ]
    ],
    color: 'black'
}

const pcs = [
    // dummy pieces
    // singlePc,
    // triplePc,

    // actual pieces
    Iblock,
    Jblock,
    Lblock,
    Oblock,

    Sblock,
    Tblock,
    Zblock,

]

const buildPc = () => pcs[Math.floor((Math.random() * pcs.length))]

export {
    buildPc
}