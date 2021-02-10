

const singlePc = {
    pivot: [0, 0],
    forms: [[]],
    // forms should start as index [0]
    // each coordinate in forms will be checked against board relative
    // to pivot
    // ie. [-1, 0] 
}

const triplePc = {
    pivot: [1, 4], // pivot is on the center of the pc
    forms: [
        [ [-1, 0], [1, 0] ], // vertical pc
        [ [0, -1], [0, 1] ]
    ]
    // when pivot attempt takes place, we check to see if 
    // 'next' form's coordinates can be placed
    // ie. no walls/static pc blocking
}

const Oblock = {
    pivot: [0, 0],
    forms: [
        [ [1, 0], [0, 1], [1, 1] ]
    ]
}

const Iblock = {
    pivot: [0, 1],
    forms: [
        [ [0, -1], [0, 1], [0, 2] ],
        [ [-1, 0], [1, 0], [2, 0] ],
        [ [0, -2], [0, 1], [0, -1] ],
        [ [-2, 0], [-1, 0], [1, 0] ],
    ]
}

const Tblock = {
    pivot: [1, 1],
    forms: [
        [ [0, -1], [-1, 0], [0, 1] ],
        [ [-1, 0], [0, 1], [-1, 0] ],
        [ [0, -1], [0, 1], [-1, 0] ],
        [ [0, 1], [-1, 0], [1, 0] ]
    ]
}

const Zblock = {
    pivot: [1, 1],
    forms: [
        [ [-1, -1], [0, -1], [0, 1] ],
        [ [-1, 1], [0, 1], [-1, 0] ],
        [ [0, -1], [1, 0], [1, 1] ],
        [ [-1, 0], [0, -1], [-1, 1] ]
    ]
}

const Sblock = {
    pivot: [1, 1],
    forms: [
        [ [0, -1], [-1, 0], [-1, 1] ],
        [ [-1, 0], [0, 1], [1, 1] ],
        [ [1, -1], [1, 0], [0, 1] ],
        [ [-1, -1], [0, -1], [1, 0] ]
    ]
}

const Jblock = {
    pivot: [1, 1],
    forms: [
        [ [-1, -1], [0, -1], [0, 1] ],
        [ [-1, 0], [-1, 1], [1, 0] ],
        [ [0, -1], [0, 1], [1, 1] ],
        [ [1, -1], [1, 0], [-1, 0] ]
    ]
}

const Lblock = {
    pivot: [1, 1],
    forms: [
        [ [0, -1], [0, 1], [-1, 1] ], 
        [ [-1, 0], [1, 0], [1, 1] ],
        [ [1, -1], [0, -1], [0, 1] ],
        [ [-1, -1], [-1, 0], [1, 0] ]
    ]
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

const buildInWaiting = () => pcs[Math.floor((Math.random() * pcs.length))]

export {
    buildInWaiting
}