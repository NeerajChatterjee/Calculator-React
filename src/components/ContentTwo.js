import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"

class ContentTwo extends React.Component{

    constructor() {
        super()
        this.state = {
            question: '',
            answer: '',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        let value = event.target.value

        if(value === "Clear"){
            this.setState({question:""})
        }
        else if(value === "="){
            let ans = eval(this.state.question)
            this.setState({ question: ans})
        }
        else{
            this.setState({question: this.state.question += value})
        }
    }

    render(){
        return(
            <div className="container">
                <div class="contentone">
                    <input type="text" className="expressn" id="expressn" value={this.state.question} />
                </div>
                <div className="contenttwo">
                    <div className="rowone">
                        <Button text={'7'} className="seven" id="seven" handleClick={this.handleClick} />
                        <Button text={'8'} className="eight" id="eight" handleClick={this.handleClick} />
                        <Button text="9" className="nine" id="nine" handleClick={this.handleClick} />
                        <Button text="*" className="multiply" id="multiply" handleClick={this.handleClick} />
                    </div>
                    <div className="rowtwo">
                        <Button text="4" className="four" id="four" handleClick={this.handleClick} />
                        <Button text="5" className="five" id="five" handleClick={this.handleClick} />
                        <Button text="6" className="six" id="six" handleClick={this.handleClick} />
                        <Button text="-" className="substract" id="substract" handleClick={this.handleClick} />
                    </div>
                    <div className="rowthree">
                        <Button text="1" className="one" id="one" handleClick={this.handleClick} />
                        <Button text="2" className="two" id="two" handleClick={this.handleClick} />
                        <Button text="3" className="three" id="three" handleClick={this.handleClick} />
                        <Button text="+" className="add" id="add" handleClick={this.handleClick} />
                    </div>
                    <div className="rowthree">
                        <Button text="0" className="zero" id="zero" handleClick={this.handleClick} />
                        <Button text="." className="dot" id="dot" handleClick={this.handleClick} />
                        <Button text="=" className="equal" id="equal" handleClick={this.handleClick} />
                        <Button text="/" className="divide" id="divide" handleClick={this.handleClick} />
                    </div>
                    <div className="rowfive">
                        <Button text="Clear" className="clearinp" id="clearinp" handleClick={this.handleClick} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentTwo
