import React, { Component } from 'react';
import './App.css';
import Selector from './Selector.js';
import Playground from './Playground.js';

const modes = ['mode1', 'mode2', 'mode3'];

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">App title</h1>
                </header>
                <Selector modes={modes}/>
                <Playground />
            </div>
        );
    }
}

export default App;
