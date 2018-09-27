import React, { Component } from 'react';

class Selector extends Component {

    render() {
        return (
            <div className="Selector">
                <p>Selector</p>
                <ul>
                {this.props.modes.map(mode => (
                    <li key={mode.name}>{mode.name}</li>
                ))}
                </ul>
            </div>
        );
    }
}

export default Selector;