import React, { Component } from 'react'
import REACTDOM from "react-dom";
import "./NameBox.css"
import Home from "./Home.js"
import FlipMove from "react-flip-move";

class NameBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasName: props.hasName,
            value: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleClick(e) {
        this.setState({
            hasName: true
        });
        e.preventDefault();
        console.log(this.state.value)

        var destination = document.querySelector("#container");
        REACTDOM.render(
            <div>
                <Home name={this.state.value} />
            </div>,
            destination
        );
    }

    render() {
        console.log(this.state.hasName)
        if (!this.state.hasName) {
            return (
                <FlipMove duration={150} easing="ease-out">
                    <div className="SignInMain">
                        <h1>Sign In</h1>
                        <div className="NameForm">
                            <form onSubmit={this.handleClick}>
                                <input onChange={this.handleChange} value={this.state.value} placeholder="Enter Name"></input>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div >
                </FlipMove>)
        }
        else {
            return null;
        }

    };
}

export default NameBox;