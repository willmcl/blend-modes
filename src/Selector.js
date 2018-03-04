import React, { Component } from 'react';

class Selector extends Component {

    render() {
        return (
            <div className="Selector">
                <p>Selector</p>
                <ul>
                {this.props.modes.map(mode => (
                    <li>{mode}</li>
                ))}
                </ul>
            </div>
        );
    }
}

export default Selector;