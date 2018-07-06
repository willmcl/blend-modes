import React, { Component } from 'react';
import DataTableBody from './DataTableBody.js';
import DataTableFooter from './DataTableFooter.js';

class DataTable extends Component {
    render() {
        return (
            <div className="DataTable">
                <p>DataTable</p>
                <table>
                    <tr>
                        <td></td>
                        <td>Binary Values</td>
                        <td>RGB Values</td>
                    </tr>
                <DataTableBody/>
                <DataTableFooter/>
                </table>
            </div>
        )
    }
}

export default DataTable;