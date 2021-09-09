import React from "react"
import ReactDOM from "react-dom"

class Motivation extends React.Component{
    constructor(){
        super()
        this.state = {
            quote: ""
        }
        this.quotes = this.quotes.bind(this)
    }

    quotes(){
        fetch("https://favqs.com/api/qotd")
         .then(response => response.json())
         .then(data => {
             this.setState({
                 quote: data.quote.body
             })
         })
    }

    componentDidMount(){
        this.quotes()
    }

    render(){
        return(
            <div className="Motiv">
               <p className="Motivpara">{this.state.quote}</p>
               <button onClick={this.quotes} className="Motivbutton">REFRESH</button>
            </div>
        )
    }
}

export default Motivation