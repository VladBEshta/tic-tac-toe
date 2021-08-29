const lin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

]
const diag = [
    [0, 4, 8],
    [2, 4, 6]
]

const patterns = [...lin, ...diag]

export function culcWinner(squares) {
    for (let i = 0; i < patterns.length; i++) {
        const [a, b, c] = patterns[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
    }
    return null
}

export function moveChecker(squares, player) {
    const movesLeft = squares.filter(el => el === null)
    for (let i = 0; i < patterns.length; i++) {

        const [a, b, c] = patterns[i];

        if (((squares[a] === null || squares[a] === player)
            && (squares[b] === null || squares[b] === player)
            && (squares[c] === null || squares[c] === player))
            && !(movesLeft.length === 3 && squares[a] === null && squares[b] === null && squares[c] === null)
            && (movesLeft.length >= 3 || (
                (squares[a] === squares[b] && squares[c] === null)
                || (squares[a] === squares[c] && squares[b] === null)
                || (squares[b] === squares[c] && squares[a] === null)))
            && (movesLeft.length > 1 || (
                (squares[a] === squares[b] === "O" && squares[c] === null)
                || (squares[a] === squares[c] === "O" && squares[b] === null)
                || (squares[b] === squares[c] === "O" && squares[a] === null)))
        )
            return true

    }
    return false
}