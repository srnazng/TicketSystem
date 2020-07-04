import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./Home.css"

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            name: props.name
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.getName = this.getName.bind(this);
    }

    addItem(e) {
        if (this._inputElement1.value !== "") {
            var dateNow = new Date();
            var hours = 0;
            var end = "AM";
            if (dateNow.getHours() > 12) {
                hours = (dateNow.getHours() % 12);
                end = "PM"
            }
            var timeNow = hours + ':' + dateNow.getMinutes() + end;
            console.log("time submitted: ", timeNow);
            var newItem = {
                name: this.state.name,
                problem: this._inputElement1.value,
                location: this._inputElement2.value,
                contact: this._inputElement3.value,
                timeSubmitted: timeNow,
                key: Date.now()
            };

            console.log("time submitted: ", this.timeSubmitted);

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        else {
            alert("Fill out all text boxes");
        }

        //clear input fields
        this._inputElement1.value = "";
        this._inputElement2.value = "";
        this._inputElement3.value = "";

        //prevent page refresh
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    getName() {
        return this.state.name;
    }

    render() {
        console.log(this.props.name)
        return (
            <div className="todoListMain">

                <div className="header">
                    <h1>Hey {this.getName()}!</h1>
                    <p>How can we help you?</p>
                    <form onSubmit={this.addItem}>
                        <label>I need help with</label>
                        <input ref={(a) => this._inputElement1 = a}
                            placeholder="describe your problem">
                        </input>
                        <br />
                        <label>You can find me at</label>
                        <input ref={(b) => this._inputElement2 = b}
                            placeholder="where are you?">
                        </input>
                        <br />
                        <label>You can contact me through</label>
                        <input ref={(c) => this._inputElement3 = c}
                            placeholder="your cell phone #, email etc.">
                        </input>
                        <br />
                        <button type="submit">HELP ME!</button>
                    </form>
                </div>

                <TodoItems entries={this.state.items}
                    delete={this.deleteItem}
                />

            </div>
        );
    }
}

export default Home;