

const clearLines = (board, rows) => {

    const draftBoard = new Array(board.length)

    let floor = board.length-1
    for (let r = board.length-1; r > -1; r--) {
        if (!rows.has(r)) {
            draftBoard[floor] = board[r]
            floor -= 1
        }
    }

    for (let i = 0; i < rows.size; i++) {
        draftBoard[i] = new Array(board[0].length).fill(0)
    }

    return draftBoard
}

export { clearLines }