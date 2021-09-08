import React from "react"
import ReactDOM from "react-dom"

function ContentOne(props) {
       return(
            <div class="contentone">
                <input type="text" className="expressn" id="expressn" value={props.display}/>
            </div>
        )
}

export default ContentOne