import React, { Component } from 'react';
import DataTableBody from './DataTableBody.js';
import DataTableFooter from './DataTableFooter.js';

class DataTable extends Component {
    render() {
        return (
            <div className="DataTable">
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td colSpan="3">Binary Values</td>
                            <td colSpan="3">RGB Values</td>
                        </tr>
                        <tr>
                            <td>Channels</td>
                            <td>R</td>
                            <td>G</td>
                            <td>B</td>
                            <td>R</td>
                            <td>G</td>
                            <td>B</td>
                        </tr>
                    </thead>
                <DataTableBody selected={this.props.selected}/>
                <DataTableFooter selected={this.props.selected}/>
                </table>
            </div>
        )
    }
}

export default DataTable;