import React, { Component } from 'react';
import DataTable from './DataTable.js';
import DataInstructions from './DataInstructions.js';

class Data extends Component {
    render() {

        const selected = this.props.selected;
        let data;

        if ( selected.length > 1 ) {
            data = <DataTable current={this.props.current} selected={this.props.selected}/>;
        } else {
            data = <DataInstructions />;
        }

        return (
            <div className="Data">
                <h3>Data</h3>
                {data}
            </div>
        )
    }
}

export default Data;