import React, { Component } from 'react';
import DataTableBody from './DataTableBody.js';
import DataTableFooter from './DataTableFooter.js';

class DataTable extends Component {
    render() {
        return (
            <div className="DataTable">
                <p>{this.props.current.displayName}: {this.props.current.displayFormula}</p>
                <table>
                    <thead>
                        <tr>
                            <td colSpan="2"></td>
                            <td colSpan="3">Binary Values</td>
                            <td colSpan="3">RGB Values</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Z</td>
                            <td>R</td>
                            <td>G</td>
                            <td>B</td>
                            <td>R</td>
                            <td>G</td>
                            <td>B</td>
                        </tr>
                    </thead>
                <DataTableBody selected={this.props.selected}/>
                <DataTableFooter current={this.props.current} selected={this.props.selected}/>
                </table>
            </div>
        )
    }
}

export default DataTable;