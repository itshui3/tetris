

const clearLines = (board, rows) => {
    console.log(board, rows)
    const updatedBoard = board.map((row, r_idx) => {
        if (rows.has(r_idx)) {
            return new Array(board[0].length).fill(0)
        } else {
            return row
        }
    })

    return updatedBoard

}

export { clearLines }