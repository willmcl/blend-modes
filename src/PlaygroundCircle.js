import React, { Component } from 'react';

class PlaygroundCircle extends Component {
    render() {
        return (
            <div className="PlaygroundCircle" style={{backgroundColor: this.props.colour, mixBlendMode: this.props.current.name}}>
                <p>PlaygroundCircle</p>
            </div>
        )
    }
}

export default PlaygroundCircle;