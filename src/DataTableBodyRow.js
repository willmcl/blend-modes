import React, { Component } from 'react';

class DataTableBodyRow extends Component {
    render() {
        return (
            <tr className="DataTableBodyRow">
                <td>{this.props.name}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
        )
    }
}

export default DataTableBodyRow;