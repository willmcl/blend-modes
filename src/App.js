import React, { Component } from 'react';
import './App.css';
import Selector from './Selector.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">App title</h1>
                </header>
                <Selector />
            </div>
        );
    }
}

export default App;
