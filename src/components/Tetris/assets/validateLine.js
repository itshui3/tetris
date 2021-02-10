
import produce, { enableMapSet } from 'immer'
enableMapSet()
const validateLine = (board) => {
    // validateLine => linesObj: { lines: [...Rows], points }

let lineObj = board.reduce( (accLineInfo, row, r_idx) => {
    // check cur row for isLine
    const isLine = row.reduce( (rowInfo, cell) => {
        if (cell !== 1) { return false }
        else { return rowInfo }
    }, true) 
    
    // accumulate points if line
    if (isLine) {
        return produce(accLineInfo, draft => {
            draft.lines.add(r_idx)
            draft.points +=  + 1
        })
    } else {
        return accLineInfo
    }

}, { lines: new Set(), points: 0 })

return lineObj

}

export {
    validateLine
}