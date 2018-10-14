import React, { Component } from 'react';
import './App.css';
import Selector from './Selector.js';
import Playground from './Playground.js';
import Instructions from './Instructions.js';
import Basics from './Basics.js';
import Desc from './Desc.js';
import Data from './Data.js';

const colours = [
    {
        'value': 'rgb(255, 255, 255)',
        'name': 'white',
    },
    {
        'value': 'rgb(0, 0, 0)',
        'name': 'black',
    },
    {
        'value': 'rgb(128, 128, 128)',
        'name': 'grey',
    },
    {
        'value': 'rgb(255, 0, 0)',
        'name': 'red',
    },
    {
        'value': 'rgb(0, 0, 255)',
        'name': 'blue',
    },
    {
        'value': 'rgb(0, 255, 0)',
        'name': 'green',
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

let current = modes[0];

// Test out how we might select the colours
let selected = colours;

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">App title</h1>
                </header>
                <Selector modes={modes}/>
                <Playground colours={colours} current={current}/>
                <div className="App-row">
                    <Instructions/>
                    <Basics/>
                    <Desc current={current}/>
                    <Data current={current} selected={selected}/>
                </div>
            </div>
        );
    }
}

export default App;
