
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
    if (!Object.keys(activePc).length) { 
        console.log('keyPress: RIGHT. no pc present, preventing movement') 
        return { canHas: false, pos: [] } 
    }

    // dir: [UP, RIGHT, DOWN, LEFT] - helper validates against ACTIONS

    const pivot = activePc.pivot
    const curForm = activePc.forms[activePc.form]

    const formsPositioned = [pivot, ...curForm.map((point, idx) => {
        return [point[0] + pivot[0], point[1] + pivot[1]]
    })]


    if (dir === LEFT) {

            return formsPositioned.reduce( (prev, block, idx) => {
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
                } else { return prev }
                
            }, { canHas: true, pos: [pivot[0], pivot[1]-1] })

        } 

    if (dir === RIGHT) {

        return formsPositioned.reduce( (prev, block, idx) => {
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
            } else { return prev }

            
        }, { canHas: true, pos: [pivot[0], pivot[1]+1] })

    } 

    if (dir === DOWN) {

        return formsPositioned.reduce( (prev, block, idx) => {
            if (!prev.canHas) { return prev }

            const blockY = block[0]
            const blockX = block[1]

            // floor collision check
            if (blockY + 1 >= board.length) {
                return produce(prev, draft => {
                    draft.canHas = false
                })

            // staticPc collision check
            } else if (board[blockY+1][blockX] === 1) {

                return produce(prev, draft => {
                    draft.canHas = false
                })

            } else { return prev }

        }, { canHas: true, pos: [pivot[0]+1, pivot[1]] })

    }

}