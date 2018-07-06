import React, { Component } from 'react';
import DataTableBodyRow from './DataTableBodyRow.js';

class DataTableBody extends Component {
    render() {
        return (
            <div className="DataTableBody">
                <p>DataTableBody</p>
                <DataTableBodyRow/>
            </div>
        )
    }
}

export default DataTableBody;