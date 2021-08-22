import React from 'react'
import '../App.css';
import Square from './Square';


export default function BattleBoard({ squares, onClick }) {
    return (
        <div className='battle-board'>
            {squares.map((square, i) =>
                <Square key={i} value={square} onClick={() => onClick(i)} />
            )}
        </div>
    )
}
