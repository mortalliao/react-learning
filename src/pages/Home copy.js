import React from 'react'

import './Home.css'
import Button from '../components/Button'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    add() {
        this.setState(
            {
                count: this.state.count + 1
            }
        );
    }

    render() {
        return (
            <div id="home">
                <p>{this.state.count}</p>
                <Button color="red" onClick={() => this.add()}>+</Button>
            </div>
        );
    }
}