
const longPc = [
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6]
]

const singlePc = [
    [0, 0]
]

const pcs = [
    singlePc
]

const buildInWaiting = () => pcs[Math.floor((Math.random() * pcs.length))]

export {
    buildInWaiting
}