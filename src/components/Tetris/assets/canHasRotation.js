
import produce from 'immer'

const ROTATE = {
    CW: 'rotate_cw', // expect shift form index to right
    CCW: 'rotate_ccw', // expect shift form index to left
}
const { CW, CCW } = ROTATE;

const canHasRotation = (board, activePc, dir) => {

const prevForm = activePc.form;
let nextForm;

if(CW === dir) {
    console.log('validate CW')
    nextForm = activePc.form === activePc.forms.length-1 ? 0 : activePc.form+1;
    
}

if(CCW === dir) {
    nextForm = activePc.form === 0 ? activePc.forms.length-1 : activePc.form-1;
}
    let pivot = activePc.pivot

    const builtForm = [activePc.pivot, ...activePc.forms[nextForm].map((block, idx) => {
        return [block[0] + pivot[0], block[1] + pivot[1]]
    })]

    const canHasRotate = builtForm.reduce((prev, block) => {
        if (!prev) { return prev }
        // check wall
        if (block[0] < 0 || block[0] >= board.length) { 
            return false }
        if (block[1] < 0 || block[1] >= board[0].length) { 
            return false }

        // check static
        if (board[block[0]][block[1]]) { 
            return false }

        return prev
    }, true)

    return { form: canHasRotate ? nextForm : prevForm }
} // canHasRotation

export { canHasRotation }