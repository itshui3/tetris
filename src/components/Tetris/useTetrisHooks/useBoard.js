
import { useReducer } from 'react'

export const useBoard = (reducer, init) => {
    const [boardState, dispatchBoard] = useReducer(reducer, init)

    return [boardState, dispatchBoard]
}