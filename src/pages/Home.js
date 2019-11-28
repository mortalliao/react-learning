import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import './Home.css'

function HeadBar(props) {
    return (
        <div>
            <h1>HeadBar</h1>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/inbox">Inbox</Link></li>
            </ul>
            {this.props.children}
        </div>
    )
}

function About() {
    return <h3>About</h3>
}


function Inbox() {
    return (
        <div>
            <h2>Inbox</h2>
            {this.props.children || "Welcome to your Inbox"}
        </div>
    )
}

function Message() {
    return <h3>Message {this.props.params.id}</h3>
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HeadBar}>
                        <Route path="about" component={About} />
                        <Route path="inbox" component={Inbox}>
                            <Route path="messages/:id" component={Message} />
                        </Route>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}