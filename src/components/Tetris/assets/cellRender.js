

const isStaticPc = (c) => {
    
    if (c) return {
        backgroundColor: 'black'
    }
    
}

const isActivePc = (activeCoords, cellCoords) => {

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
    isStaticPc,
    isActivePc,
}