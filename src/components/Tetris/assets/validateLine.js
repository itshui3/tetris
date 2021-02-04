
import produce from 'immer'
const validateLine = (board, combo) => {
    // validateLine => linesObj: { lines: [...Rows], points }

let lineObj = board.reduce( (accLineInfo, row, r_idx) => {
    // check cur row for isLine
    const isLine = row.reduce( (rowInfo, cell) => {
        if (!cell) { return false }
        else { return rowInfo }
    }, true) 
    
    // accumulate points if line
    if (isLine) {
        return produce(accLineInfo, draft => {
            draft.lines.push(r_idx)
            draft.points += (combo * 1) + 1
        })
    } else {
        return accLineInfo
    }

}, { lines: [], points: 0 })

return lineObj

}

export {
    validateLine
}