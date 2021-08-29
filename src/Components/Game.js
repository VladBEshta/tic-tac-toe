import React, { useState } from 'react'
import '../App.css'
import BattleBoard from './BattleBoard'
import { culcWinner, moveChecker } from './../helper';
import Modal from './Modal';
import InfoPanel from './InfoPanel';


export default function Game() {
    const [modalActive, setModalActive] = useState(true)
    const [names, setNames] = useState(['Player1', 'Player2'])
    const [score, setScore] = useState([0, 0])
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    const winner = culcWinner(board)
    const checkX = moveChecker(board, "X")
    const checkO = moveChecker(board, "O")

    const handleClick = i => {
        const newBord = [...board]
        if (winner || newBord[i] || (!checkO && !checkX)) return
        newBord[i] = xIsNext ? "X" : "O"
        setBoard(newBord)
        setXIsNext(!xIsNext)

    }

    const isDraw = () => {
        const newBord = [...board]
        return newBord.every(e => e)
    }

    const gameOver = () => {
        const nextMove = xIsNext ? "X" : "O"
        const newGameButton = <button onClick={() => { newGame() }}>New Game</button>
        if (winner) return <div>
            <h3>Winner is {winner === "X"
                ? names[0]
                : names[1]}
            </h3>
            {newGameButton}
        </div>
        else if (isDraw() || (checkO && checkX)) return <>
            <h3>There is no winner, try again</h3>
            {newGameButton}
        </>
        return (
            <h3>
                Next is: {nextMove}
            </h3>)
    }

    const newGame = () => {
        setBoard(Array(9).fill(null))
        setXIsNext(true)
        const newScore = [...score]
        if (winner === "X") {
            newScore[0] = newScore[0] + 1
        } else if (winner === "O") {
            newScore[1] = newScore[1] + 1
        }
        setScore(newScore)
    }

    return (
        <div className='game'>
            <BattleBoard
                onClick={handleClick}
                squares={board}
            />
            <Modal
                active={modalActive}
                setActive={setModalActive}
                setNames={setNames}
            />
            <InfoPanel
                winner={winner}
                names={names}
                newGame={newGame}
                score={score}
                gameOver={gameOver}
            />
        </div>
    )
}
