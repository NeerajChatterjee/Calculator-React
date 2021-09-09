import React from "react"
import ReactDOM from "react-dom"
import ContentOne from "./components/ContentOne.js"
import ContentTwo from "./components/ContentTwo.js"
import Motivation from "./components/Motivation.js"

class App extends React.Component{
  render(){
    return(
      <div>
        <Motivation />
        <ContentTwo />
      </div>
    )
  }
}

export default App