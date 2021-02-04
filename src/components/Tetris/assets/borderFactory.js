
const length = {
    row: 24,
    col: 10
}

const determineBorder = (r_idx, c_idx) => {
    let borderObj = {}

    if (c_idx < length.col) { 
        borderObj = { borderBottom: '1px solid black' }
    }

    if (r_idx < length.row) { 
        borderObj = {
            ...borderObj,
            borderRight: '1px solid black'
        }
    }

    return borderObj
}

export {
    determineBorder
}