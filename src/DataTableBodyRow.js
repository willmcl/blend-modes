import React, { Component } from 'react';
import { rgbToChannels, rgbToBinary } from './helpers';

class DataTableBodyRow extends Component {
    render() {
        let bin = rgbToBinary( this.props.value ),
            rgb = rgbToChannels( this.props.value );
        return (
            <tr className="DataTableBodyRow">
                <td>{this.props.name}</td>
                <td>{bin[0]}</td>
                <td>{bin[1]}</td>
                <td>{bin[2]}</td>
                <td>{rgb[0]}</td>
                <td>{rgb[1]}</td>
                <td>{rgb[2]}</td>
            </tr>
        )
    }
}

export default DataTableBodyRow;