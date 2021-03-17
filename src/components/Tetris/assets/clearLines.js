
import produce from 'immer';

const clearLines = (board, rows) => {
    // change rows to an array with descending rows to be cleared
    let consumedBoard = produce(board, draftBoard => {

    for (let i = 0; i < rows.length; i++) {
        // for each marked row cleared, the next one becomes 1 row up
        let curMarked = rows[i] + i;

        // crush line
        for (let l = curMarked-1; l > -1; l--) {
            draftBoard[l+1] = draftBoard[l].map(item => item);

        }
    }
    
        return draftBoard;
    });
    console.log('consumedBoard', consumedBoard);
    return consumedBoard;
}

export { clearLines }