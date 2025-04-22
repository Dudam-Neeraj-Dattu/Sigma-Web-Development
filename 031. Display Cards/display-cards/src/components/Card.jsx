import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <h3>{props.userId}</h3>
            <h3>{props.id}</h3>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    )
}

export default Card