import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
        this.createClaimedTasks = this.createClaimedTasks.bind(this);
        this.delete = this.delete.bind(this);
        this.claimItem = this.claimItem.bind(this);
        this.reopenItem = this.reopenItem.bind(this);
    }

    createTasks(item) {
        return <div>
            <li key={item.key}>
                <h3>
                    {item.name}
                    <button onClick={e => { e.preventDefault(); this.delete(item.key) }} className="xButton">
                        x
                    </button>
                    <br />
                    <div className="time">{item.timeSubmitted}</div>
                </h3>
                <p>
                    <br />
                    {item.problem}
                    <br />
                        ({item.location})
                        <br />
                    <b>Contact: </b>{item.contact}
                </p>
                <form onSubmit={e => { e.preventDefault(); this.claimItem(item.key) }}>
                    <button type="submit">CLAIM TICKET</button>
                </form>
            </li >
        </div>
    }

    createClaimedTasks(item) {
        return <div>
            <li key={item.key}>
                <h3>
                    {item.name}
                    <button onClick={e => { e.preventDefault(); this.delete(item.key) }} className="xButton">
                        x
                    </button>
                    <br />
                    <div className="time">{item.timeSubmitted}</div>
                </h3>
                <p>
                    <br />
                    {item.problem}
                    <br />
                        ({item.location})
                        <br />
                    <b>Contact: </b>{item.contact}
                </p>
                <form onSubmit={e => { e.preventDefault(); this.reopenItem(item.key) }}>
                    <button type="submit">REOPEN TICKET</button>
                </form>
            </li >
        </div>
    }

    delete(key) {
        this.props.delete(key);
    }

    claimItem(key) {
        this.props.claimItem(key);
    }

    reopenItem(key) {
        this.props.reopenItem(key);
    }


    render() {
        console.log(this.props);
        var todoEntries = this.props.entries;
        var claimedEntries = this.props.claimedEntries;
        var openEntries = this.props.openEntries;
        var openListItems = openEntries.map(this.createTasks);
        var claimedListItems = claimedEntries.map(this.createClaimedTasks);

        return (
            <ul className="theList">
                <FlipMove duration={150} easing="ease-out">
                    <div className="openTickets">
                        {openListItems}
                    </div>
                    <div className="claimedTickets">
                        {claimedListItems}
                    </div>
                </FlipMove>
            </ul>
        )
    }
}

export default TodoItems;