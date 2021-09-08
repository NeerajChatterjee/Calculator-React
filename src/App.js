import React from "react"
import ReactDOM from "react-dom"
import ContentOne from "./components/ContentOne.js"
import ContentTwo from "./components/ContentTwo.js"

class App extends React.Component{
  render(){
    return(
      <div>
        <ContentTwo />
      </div>
    )
  }
}

export default App