import React, { Component } from 'react';

class PlaygroundSwatch extends Component {

    render() {
        return (
            <div className="PlaygroundSwatch" style={{backgroundColor: this.props.colour, mixBlendMode: this.props.current.name}}>
            </div>
        )
    }
}

export default PlaygroundSwatch;