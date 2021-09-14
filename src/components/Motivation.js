import React from "react"
import ReactDOM from "react-dom"

class Motivation extends React.Component{
    constructor(){
        super()
        this.state = {
            quote: "",
            isLoading: false
        }
        this.quotes = this.quotes.bind(this)
    }

    quotes(){
        fetch("https://favqs.com/api/qotd")
         .then(response => response.json())
         .then(data => {
             this.setState({
                 quote: data.quote.body,
                 isLoading: false
             })
         })
    }

    componentDidMount(){
        this.setState({isLoading: true})
        this.quotes()
    }

    render(){
        let text = this.state.isLoading ? "Loading..Please wait" : this.state.quote 
        return(
            <div className="Motiv">
               <p className="Motivpara">{text}</p>
               <button onClick={this.quotes} className="Motivbutton">REFRESH</button>
            </div>
        )
    }
}

export default Motivation