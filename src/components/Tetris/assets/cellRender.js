

const isAPc = (c, activeCoords, cellCoords) => {
    // check static pc
    if (c === 1) {
        return { backgroundColor: 'black'}
    } else if (c === 2) {
        return { backgroundColor: 'pink'}
    }

    const cell_y = cellCoords[0]
    const cell_x = cellCoords[1]

    return activeCoords.reduce((style, coords) => {

        if (coords[0] === cell_y && coords[1] === cell_x) {
            return {
                backgroundColor: 'black'
            }
        } else { return style }
        
    }, {})


}

export {
    isAPc,
}