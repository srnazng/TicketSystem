import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
    }

    createTasks(item) {
        return <div>
            <li key={item.key}>
                <h3>{item.name}<button onClick={e => { e.preventDefault(); this.delete(item.key) }} className="xButton">x</button></h3>
                <p>
                    {item.problem}
                    <br />
                        ({item.location})
                        <br />
                    <b>Contact: </b>{item.contact}
                </p>
                <form onSubmit={e => { e.preventDefault(); this.delete(item.key) }}>
                    <button type="submit">CLAIM TICKET</button>
                </form>
            </li >
        </div>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks)

        return (
            <ul className="theList">
                <FlipMove duration={150} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        )
    }
}

export default TodoItems;