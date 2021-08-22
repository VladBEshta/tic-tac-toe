import React from 'react'
import '../App.css'

export default function Square({ value, onClick }) {
    return (
        <div >
            <button className="square" onClick={onClick}>{value}</button>
        </div>
    )
}
