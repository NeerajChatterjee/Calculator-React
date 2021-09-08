import React from "react"
import ReactDOM from "react-dom"

function Button(props){
    return(
        <input
            type="button"
            value={props.text}
            onClick={props.handleClick}
            className={props.className}
            id = {props.id}
        />
    )
}

export default Button