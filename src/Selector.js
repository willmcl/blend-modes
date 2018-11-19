import React, { Component } from 'react';
import IssueReportingInfo from './IssueReportingInfo.js';

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
                <p>A project by <a href="http://willmclean.net" target="_blank" rel="noopener noreferrer">Will
                    McLean</a></p>
                <IssueReportingInfo/>
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