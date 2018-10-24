import React, { Component } from 'react';
import DataTableBodyRow from './DataTableBodyRow.js';

class DataTableBody extends Component {
    render() {
        return (
            <tbody className="DataTableBody">
                 {this.props.selected.map(selected => (
                     <DataTableBodyRow key={selected.name} colour={selected} current={this.props.current}/>
                 ))}
            </tbody>
        )
    }
}

export default DataTableBody;