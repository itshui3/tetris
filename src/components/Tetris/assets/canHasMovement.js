
import produce from 'immer'
const BOARD_ACTIONS = {
    UP: 'keyPress_up',
    RIGHT: 'keyPress_right',
    DOWN: 'keyPress_down',
    LEFT: 'keyPress_left',
}

const {
    UP,
    RIGHT,
    DOWN,
    LEFT,
} = BOARD_ACTIONS

export const canHasMovement = (board, activePc, dir) => {
    // receive (board, activePc)
    // if !activePc.lenght return false
    if (!activePc.length) { 
        console.log('keyPress: RIGHT. no pc present, preventing movement') 
        return { canHas: false, pos: [] } 
    }

    // dir: [UP, RIGHT, DOWN, LEFT] - helper validates against ACTIONS

    /* reduce to check individual parts, returns: 
        expect: moveDown1Obj : {
            canHas: boolean,
            pos: Array(1) [y, x]
            }
    */

   if (dir === LEFT) {
        return activePc.reduce( (prev, block, idx) => {
            if (!prev.canHas) { return prev }

            const blockY = block[0]
            const blockX = block[1]

            // wall collision check
            if (blockX - 1 < 0) {
                return produce(prev, draft => {
                    draft.canHas = false
                    draft.pos = []
                })
            }
            // pc collision check
            else if (board[blockY][blockX-1] === 1) {
                return produce(prev, draft => {
                    draft.canHas = false
                    draft.pos = []
                })
            } else {
                return produce(prev, draft => {
                    draft.pos = [...draft.pos, [blockY, blockX-1]]
                })
            }

            
        }, { canHas: true, pos: [] })

    } 

    if (dir === RIGHT) {
        return activePc.reduce( (prev, block, idx) => {
            if (!prev.canHas) { return prev }

            const blockY = block[0]
            const blockX = block[1]
            // wall collision check
            if (blockX + 1 >= board[0].length) {
                return produce(prev, draft => {
                    draft.canHas = false
                    draft.pos = []
                })
            }
            // pc collision check
            else if (board[blockY][blockX+1] === 1) {
                return produce(prev, draft => {
                    draft.canHas = false
                    draft.pos = []
                })
            } else {
                return produce(prev, draft => {
                    draft.pos = [...draft.pos, [blockY, blockX+1]]
                })
            }

            
        }, { canHas: true, pos: [] })

    } 
    
    if (dir === DOWN) {
        return activePc.reduce( (prev, block, idx) => {
            if (!prev.canHas) { return prev }

            const blockY = block[0]
            const blockX = block[1]

            // floor collision check
            if (blockY + 1 >= board.length) {
                return produce(prev, draft => {
                    draft.canHas = false
                    draft.pos = []
                })

            // staticPc collision check
            } else if (board[blockY+1][blockX] === 1) {

                return produce(prev, draft => {
                    draft.canHas = false
                    draft.pos = []
                })

            // render pc next pos returned with next acc/prev
            } else {
                return produce(prev, draft => {
                    draft.pos = [...draft.pos, [blockY+1, blockX]]
                })
            }

        }, { canHas: true, pos: [] })

    }

}