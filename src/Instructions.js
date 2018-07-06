import React, { Component } from 'react';

class Instructions extends Component {
    render() {
        return (
            <div className="Instructions">
                <p>Instructions</p>
                <p>Click on the overlapping areas of the circles to see the result of the formula in action. Drag them
                    around to experiment with different combinations.</p>
                <p>Every time you drag a layer it will be moved to the top of the layer stack.</p>
            </div>
        )
    }
}

export default Instructions;