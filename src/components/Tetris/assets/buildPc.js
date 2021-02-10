
const startingX = 4

const Iblock = {
    pivot: [0, 1 + startingX],
    forms: [
        [ [0, -1], [0, 1], [0, 2] ],
        [ [-1, 0], [1, 0], [2, 0] ],
        [ [0, -2], [0, 1], [0, -1] ],
        [ [-2, 0], [-1, 0], [1, 0] ],
    ],
    color: 'cyan'
}

const Jblock = {
    pivot: [1, 1 + startingX],
    forms: [
        [ [-1, -1], [0, -1], [0, 1] ],
        [ [-1, 0], [-1, 1], [1, 0] ],
        [ [0, -1], [0, 1], [1, 1] ],
        [ [1, -1], [1, 0], [-1, 0] ]
    ],
    color: 'dodgerblue'
}

const Lblock = {
    pivot: [1, 1 + startingX],
    forms: [
        [ [0, -1], [0, 1], [-1, 1] ], 
        [ [-1, 0], [1, 0], [1, 1] ],
        [ [1, -1], [0, -1], [0, 1] ],
        [ [-1, -1], [-1, 0], [1, 0] ]
    ],
    color: 'tomato'
}

const Oblock = {
    pivot: [0, 0 + startingX],
    forms: [
        [ [1, 0], [0, 1], [1, 1] ]
    ],
    color: 'yellow'
}

const Sblock = {
    pivot: [1, 1 + startingX],
    forms: [
        [ [0, -1], [-1, 0], [-1, 1] ],
        [ [-1, 0], [0, 1], [1, 1] ],
        [ [1, -1], [1, 0], [0, 1] ],
        [ [-1, -1], [0, -1], [1, 0] ]
    ],
    color: 'forestgreen'
}

const Tblock = {
    pivot: [1, 1 + startingX],
    forms: [
        [ [0, -1], [-1, 0], [0, 1] ],
        [ [-1, 0], [0, 1], [1, 0] ],
        [ [0, -1], [0, 1], [1, 0] ],
        [ [0, -1], [-1, 0], [1, 0] ]
    ],
    color: 'indigo'
}

const Zblock = {
    pivot: [1, 1 + startingX],
    forms: [
        [ [-1, -1], [-1, 0], [0, 1] ],
        [ [-1, 1], [0, 1], [1, 0] ],
        [ [0, -1], [1, 0], [1, 1] ],
        [ [-1, 0], [0, -1], [1, -1] ]
    ],
    color: 'firebrick'
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