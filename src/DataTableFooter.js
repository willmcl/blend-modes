import React, { Component } from 'react';
import { rgbToBinary, binaryToRgb } from './helpers';

class DataTableFooter extends Component {
    render() {
        function calculateResult(selected, currentFormula) {
            // Convert all the selected colours to bin
            selected = selected.map( selected => rgbToBinary( selected.value ));
            // Apply current blend mode formula to each layer in turn
            let result = [];
            for (let i = 0; i < selected.length; i++) {
                if( i === 1 ) {
                    result[0] = currentFormula( selected[i-1][0], selected[i][0] );
                    result[1] = currentFormula( selected[i-1][1], selected[i][1] );
                    result[2] = currentFormula( selected[i-1][2], selected[i][2] );
                } else if( i !== 0 ) {
                    result[0] = currentFormula( result[0], selected[i][0] );
                    result[1] = currentFormula( result[1], selected[i][1] );
                    result[2] = currentFormula( result[2], selected[i][2] );
                }
            }
            // Return the bin and the rgb result
            let rgbResult = binaryToRgb(result);
            return [result, rgbResult];
        }
        let result = calculateResult(this.props.selected, this.props.current.formula);
        return (
            <tfoot className="DataTableFooter">
                <tr>
                    <td colSpan="2">Result</td>
                    <td>{result[0][0]}</td>
                    <td>{result[0][1]}</td>
                    <td>{result[0][2]}</td>
                    <td>{result[1][0]}</td>
                    <td>{result[1][1]}</td>
                    <td>{result[1][2]}</td>
                </tr>
            </tfoot>
        )
    }
}

export default DataTableFooter;