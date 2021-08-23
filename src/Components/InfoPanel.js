import React from 'react'

export default function InfoPanel({ names, score, gameOver }) {


    return (
        <div className='info-panel'>
            <h1>Score</h1>
            {names.map((name, index) => <h4 key={index}>{name}: {score[index]}</h4>)}
            {gameOver()}
        </div>
    )
}
