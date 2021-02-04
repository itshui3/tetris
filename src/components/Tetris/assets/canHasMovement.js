
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
    console.log(`in canHasMovement keyPress: ${dir}`)
    // receive (board, activePc)
    // if !activePc.lenght return false
    if (!activePc.length) { 
        console.log('keyPress: RIGHT. no pc present, preventing movement') 
        return { canHas: false, pos: [] } 
    }

    // dir: [UP, RIGHT, DOWN, LEFT] - helper validates against ACTIONS
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
            else if (board[blockY, blockX+1] === 1) {
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

    } else if (dir === LEFT) {

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
            else if (board[blockY, blockX-1] === 1) {
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

    } else if (dir === DOWN) {

        // handle down keypress case

    }

}