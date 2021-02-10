

const isAPc = (c, activePc, cellCoords) => {
    // check static pc
    if (c === 1) {
        return { backgroundColor: 'black'}
    } else if (c === 2) {
        return { backgroundColor: 'pink'}
    }

    if (!Object.keys(activePc).length) { return {} }
    const cell_y = cellCoords[0]
    const cell_x = cellCoords[1]

    const form = activePc.form;
    const forms = activePc.forms;
    const pivot = activePc.pivot;
    const color = activePc.color;

    if (pivot[0] === cell_y && pivot[1] === cell_x) return { backgroundColor: color }

    return forms[form].reduce((style, block) => {

        if (block[0] + pivot[0] === cell_y && block[1] + pivot[1] === cell_x) {
            return {
                backgroundColor: color
            }
        } else { return style }
        
    }, {})


}

export {
    isAPc,
}