import React, { Component } from 'react';
import DataTableBodyRow from './DataTableBodyRow.js';

class DataTableBody extends Component {
    render() {
        return (
            <tbody className="DataTableBody">
                 {this.props.selected.map(layer => (
                     <DataTableBodyRow key={layer.name} name={layer.name} value={layer.value} current={this.props.current}/>
                 ))}
            </tbody>
        )
    }
}

export default DataTableBody;