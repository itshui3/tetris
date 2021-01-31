
// expose this hook in compo
import { usePcs } from './usePcs'

const useTetris = (reducer, init) => {

    return usePcs(reducer, init)
    // [boardState, dispatchBoard]
}

export { useTetris }