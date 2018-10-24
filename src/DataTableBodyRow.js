import React, { Component } from 'react';
import { rgbToChannels, rgbToBinary } from './helpers';

class DataTableBodyRow extends Component {
    render() {
        let bin = rgbToBinary( this.props.colour.value ),
            rgb = rgbToChannels( this.props.colour.value );
        return (
            <tr className="DataTableBodyRow">
                <td>{this.props.colour.name}</td>
                <td>{this.props.colour.zIndex}</td>
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