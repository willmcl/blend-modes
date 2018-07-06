import React, { Component } from 'react';

class Desc extends Component {
    render() {
        return (
            <div className="Desc">
                <p>Desc</p>
                <p>{this.props.current.description}</p>
            </div>
        )
    }
}

export default Desc;