import React, { Component } from 'react';

class Selector extends Component {

    constructor(props) {
        super(props);
        this.handleModeChange = this.handleModeChange.bind(this);
    }

    handleModeChange(e) {
        this.props.onModeChange(e.target.value);
    }

    render() {
        return (
            <div className="Selector">
                <p>Selector</p>
                <form>
                {this.props.modes.map(mode => (
                    <div key={mode.name}>
                        <input type="radio" name="modeSelector" value={mode.name} onChange={this.handleModeChange} />
                        <label htmlFor={mode.name}>{mode.name}</label>
                    </div>
                ))}
                </form>
            </div>
        );
    }
}

export default Selector;