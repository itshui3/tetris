

const clearLines = (board, rows) => {
    console.log(board, rows)
    // const updatedBoard = board.map((row, r_idx) => {
    //     if (rows.has(r_idx)) {
    //         return new Array(board[0].length).fill(0)
    //     } else {
    //         return row
    //     }
    // })

    const draftBoard = new Array(board.length)

    let floor = board.length-1
    for (let r = board.length-1; r > -1; r--) {
        if (!rows.has(r)) {
            draftBoard[floor] = board[r]
            floor -= 1
            // do nothing
        }
    }

    for (let i = 0; i < rows.size; i++) {
        draftBoard[i] = new Array(board[0].length).fill(0)
    }

    return draftBoard
}

export { clearLines }