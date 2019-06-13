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
      <form>
        <label htmlFor="modeSelector">Blend mode:</label>
        <select id="modeSelector" onChange={this.handleModeChange}>
          {this.props.modes.map( mode => (
            <option key={mode.name} value={mode.name}>{mode.name}</option>
          ) )}
        </select>
      </form>
    );
  }
}

export default Selector;