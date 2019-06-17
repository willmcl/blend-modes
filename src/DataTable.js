import React, { Component } from 'react';
import DataTableBody from './DataTableBody.js';
import DataTableFooter from './DataTableFooter.js';
import styled from 'styled-components';

const Table = styled.table`
  border: 1px solid rgba(255, 255, 255, 0.2);
  thead {
    tr:first-child {
      th:first-child,
      th:nth-child(2) {
        border-right: 1px solid;
      }
    }
    tr:last-child {
      th{ 
        border-top: 1px solid rgba(255, 255, 255, 0.2); 
        border-right: 1px solid rgba(255, 255, 255, 0.2); 
      }
      th:first-child,
      th:nth-child(2),
      th:nth-child(5) {
        border-right: 1px solid;
      }
    }
  }
  tbody {
    td { border-right: 1px solid rgba(255, 255, 255, 0.2); }
    td:first-child,
    td:nth-child(2),
    td:nth-child(5) {
      border-right: 1px solid;
    }
    
    tr:first-child {
      border-top: 1px solid rgba(255, 255, 255, 1);
    }
    
    tr:last-child {
      border-bottom: 1px solid rgba(255, 255, 255, 1);
    }
  }
  
  tfoot {
    td { border-right: 1px solid rgba(255, 255, 255, 0.2); }
    td:first-child,
    td:nth-child(4) {
      border-right: 1px solid;
    }
  }
`;

class DataTable extends Component {
  render() {
    return (
      <div className="DataTable">
        <p>{this.props.current.displayName}: {this.props.current.displayFormula}</p>
        <Table>
          <thead>
          <tr>
            <th colSpan="2"></th>
            <th colSpan="3">Binary Values</th>
            <th colSpan="3">RGB Values</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Z</th>
            <th>R</th>
            <th>G</th>
            <th>B</th>
            <th>R</th>
            <th>G</th>
            <th>B</th>
          </tr>
          </thead>
          <DataTableBody selected={this.props.selected}/>
          <DataTableFooter current={this.props.current} selected={this.props.selected}/>
        </Table>
      </div>
    )
  }
}

export default DataTable;