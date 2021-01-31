
const length = {
    row: 24,
    col: 10
}

const rightBorder = (c_idx) => { 

    if (c_idx < length.col) { 
        return { borderBottom: '1px solid black' }
    } else { return {} }

}
const bottomBorder = (r_idx) => { 
    if (r_idx < length.row) { 
        return { borderRight: '1px solid black' }
    } else { return {} }
}

export {
    rightBorder,
    bottomBorder
}