import React, { Component } from 'react';
import DataTable from './DataTable.js';

class Data extends Component {
    render() {
        return (
            <div className="Data">
                <p>Data</p>
                <p>Formula: {this.props.current.displayFormula}</p>
                <DataTable/>
            </div>
        )
    }
}

export default Data;