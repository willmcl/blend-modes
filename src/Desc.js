import React, { Component } from 'react';

class Desc extends Component {
    render() {
        return (
            <div className="Desc">
                <h3>{this.props.current.displayName}</h3>
                <p>{this.props.current.description}</p>
            </div>
        )
    }
}

export default Desc;