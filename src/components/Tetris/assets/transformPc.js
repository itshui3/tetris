

import produce from 'immer'
const transformPc = (activePc, board) => {

    const buildForm = [activePc.pivot, ...activePc.forms[activePc.form].map((point, idx) => {
        return [point[0] + activePc.pivot[0], point[1] + activePc.pivot[1]]
    })]

    return buildForm.reduce( (prev, cur) => {

        const activeY = cur[0]
        const activeX = cur[1]

        return produce(prev, draft => {
            draft[activeY][activeX] = 1
        })

    }, board)

}

export { transformPc }