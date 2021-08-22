import React from 'react'

export default function InfoPanel({ winner, newGame, names, score }) {
    return (
        <div className='info-panel'>
            <h1>Score</h1>
            {names.map((name, index) => <h4 key={index}>{name}: {score[index]}</h4>)}
            {winner
                ? <h3>Winner is {winner === "X" ? names[0] : names[1]}{newGame()}</h3>
                : null}
        </div>
    )
}
