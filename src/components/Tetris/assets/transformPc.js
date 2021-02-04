

import produce from 'immer'
const transformPc = (activePc, board) => {

    return activePc.reduce( (prev, cur) => {

        const activeY = cur[0]
        const activeX = cur[1]

        return produce(prev, draft => {
            draft[activeY][activeX] = 1
        })

    }, board)

}

export { transformPc }