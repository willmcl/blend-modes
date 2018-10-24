import React, { Component } from 'react';

class DataInstructions extends Component {
    render() {
        return (
            <div className="DataInstructions">
                <p>Please select an overlapping colour with your mouse to discover blend mode data.</p>
                <p>You can drag the swatches around to create, and then inspect, different colour opverlaps.</p>
                <p>Every time you drag a swatch it will be moved to the top of the swatch stack. This is important to note for asymmetric blend modes (ones that provide a different result dependant on the order of the layers).</p>
            </div>
        )
    }
}

export default DataInstructions;