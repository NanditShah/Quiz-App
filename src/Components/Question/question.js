import React from 'react'
import "./question.css"
function question(props) {
    return (
        <div>
            <h1 className="Content">{props.quiestions}</h1>
        </div>
    )
}

export default question
