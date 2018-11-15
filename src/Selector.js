import React, { Component } from 'react';

class Selector extends Component {

    constructor( props ) {
        super( props );
        this.handleModeChange = this.handleModeChange.bind( this );
    }

    handleModeChange( e ) {
        this.props.onModeChange( e.target.value );
    }

    render() {
        return (
            <div className="Selector">
                <form>
                    <label htmlFor="modeSelector">Blend mode:</label>
                    <select id="modeSelector" onChange={this.handleModeChange}>
                        {this.props.modes.map( mode => (
                            <option key={mode.name} value={mode.name}>{mode.name}</option>
                        ) )}
                    </select>
                </form>
            </div>
        );
    }
}

export default Selector;