import React, { Component } from 'react';
import './App.css';
import Selector from './Selector.js';
import Playground from './Playground.js';
import Basics from './Basics.js';
import Desc from './Desc.js';
import Data from './Data.js';
import { isOver } from './helpers';

const colours = [
    {
        'value': 'rgb(255, 255, 255)',
        'name': 'white',
        'zIndex': 0,
    },
    {
        'value': 'rgb(0, 0, 0)',
        'name': 'black',
        'zIndex': 0,
    },
    {
        'value': 'rgb(128, 128, 128)',
        'name': 'grey',
        'zIndex': 0,
    },
    {
        'value': 'rgb(255, 0, 0)',
        'name': 'red',
        'zIndex': 0,
    },
    {
        'value': 'rgb(0, 0, 255)',
        'name': 'blue',
        'zIndex': 0,
    },
    {
        'value': 'rgb(0, 255, 0)',
        'name': 'green',
        'zIndex': 0,
    },
];

const modes = [
    {
        'name': 'multiply',
        'displayName': 'Multiply',
        'description': 'Multiply is expressed by f(a, b) = ab \n\n' +
        'It makes everything darker as multiplying 2 values between 0 and 1 will always result in a number closer to 0 - which means closer to black. \n\n' +
        'This mode is symmetric. Changing the order of the layers does not effect the result.',
        'formula': function ( a, b ) {
            return a * b;
        },
        'displayFormula': 'f(a, b) = ab',
    },
    {
        'name': 'screen',
        'displayName': 'Screen',
        'description': 'Screen is expressed by f(a, b) = 1 - (1 - a)(1 - b) \n\n' +
        'The values of the pixels are inverted, multiplied, and then inverted again. This yields the opposite effect to multiply. The result is a brighter colour. \n\n' +
        'This mode is symmetric. Changing the order of the layers does not effect the result.',
        'formula': function ( a, b ) {
            return 1 - (1 - a) * (1 - b);
        },
        'displayFormula': 'f(a, b) = 1 - (1 - a)(1 - b)',
    },
    {
        'name': 'difference',
        'displayName': 'Difference',
        'description': 'Difference is expressed by f(a, b) = | a - b | \n\nThis is the difference between the two values. \n\n' +
        'This mode is great as it results in some great colour combos.',
        'formula': function ( a, b ) {
            return Math.abs( a - b );
        },
        'displayFormula': 'f(a, b) = | a - b |',
    },
    {
        'name': 'overlay',
        'displayName': 'Overlay',
        'description': 'If a &lt; 0.5 then overlay is expressed by f(a, b) = 2ab otherwise it is expressed as 1 - 2(1 - a)(1 - b) \n\n' +
        'Overlay combines multiply and screen modes. If the base layer is light an extreme version of screen mode is used, if the base layer is dark an extreme version of multiply is used.',
        'formula': function ( a, b ) {
            if ( a <= 0.5 ) {
                return 2 * a * b;
            } else {
                return 1 - 2 * (1 - a) * (1 - b);
            }
        },
        'displayFormula': 'f(a, b) = if( a <= 0.5 ) { 2ab } else { 1 - 2(1 - a)(1 - b) }',
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: modes[0],
            selected: [],
        };

        this.handleModeChange = this.handleModeChange.bind(this);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
    }

    handleModeChange(modeValue) {
        this.setState({
            current: modes.find(x => x.name === modeValue),
        })
    }

    handleSelectionChange(e) {

        let allCircles = document.querySelectorAll('.PlaygroundSwatch'),
            selectedColours = [];
        allCircles.forEach(
            function(currentValue, currentIndex, listObj) {
                if ( isOver( listObj[currentIndex], e ) ) {
                    let bg = listObj[currentIndex].style.backgroundColor,
                        zIndex = listObj[currentIndex].style.zIndex;
                    let colourObject = colours.find( x => x.value === bg );
                    colourObject.zIndex = zIndex;
                    selectedColours.push( colourObject );
                }
            }
        );

        // Sort the selectedColours by z-index
        function Comparator( a, b ) {
            if ( a.zIndex < b.zIndex ) return -1;
            if ( a.zIndex > b.zIndex ) return 1;
            return 0;
        }
        selectedColours = selectedColours.sort( Comparator );

        this.setState({
            selected: selectedColours,
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">App title</h1>
                </header>
                <Selector
                    modes={modes}
                    onModeChange={this.handleModeChange}
                />
                <Playground
                    colours={colours}
                    current={this.state.current}
                    onSelectionChange={this.handleSelectionChange}
                />
                <div className="App-row">
                    <Basics/>
                    <Desc
                        current={this.state.current}
                    />
                    <Data
                        current={this.state.current}
                        selected={this.state.selected}
                    />
                </div>
            </div>
        );
    }
}

export default App;
