import React, { Component } from 'react';
import PlaygroundCircle from './PlaygroundCircle.js';

class Playground extends Component {
    render() {
        return (
            <div className="Playground">
                <p>Playground</p>
                {this.props.colours.map(colour => (
                    <PlaygroundCircle colour={colour} current={this.props.current}/>
                ))}
            </div>
        )
    }
}

export default Playground;