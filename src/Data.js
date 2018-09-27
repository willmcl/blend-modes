import React, { Component } from 'react';
import DataTable from './DataTable.js';

class Data extends Component {
    render() {
        return (
            <div className="Data">
                <p>Data</p>
                <p>{this.props.current.displayName}: {this.props.current.displayFormula}</p>
                <DataTable selected={this.props.selected}/>
            </div>
        )
    }
}

export default Data;