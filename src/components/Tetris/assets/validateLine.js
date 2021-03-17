
import produce, { enableMapSet } from 'immer'
enableMapSet()
let validateLine = (board) => {
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
            draft.lines.push(r_idx)
            draft.points +=  + 1
        })
    } else {
        return accLineInfo
    }

}, { lines: [], points: 0 })

lineObj = produce(lineObj, draft => {
    draft.lines = draft.lines.reverse();
})

return lineObj

}

export {
    validateLine
}