import React, { Component } from 'react';
import PlaygroundSwatch from './PlaygroundSwatch.js';

class Playground extends Component {

    constructor(props) {
        super(props);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
    }

    draggable() {
        // SRC: https://jsfiddle.net/tovic/Xcb8d/
        let objects = document.querySelectorAll( '.PlaygroundSwatch' );

        let selected = null, // Object of the element to be moved
            x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
            x_elem = 0, y_elem = 0, // Stores top, left values (edge) of the element
            z = 7;

        Array.prototype.forEach.call(objects, function (object) {

            // Will be called when user starts dragging an element
            function _drag_init( elem ) {
                // Store the object of the element which needs to be moved
                selected = elem;
                selected.style.zIndex = z;
                z++;
                x_elem = x_pos - selected.offsetLeft;
                y_elem = y_pos - selected.offsetTop;
            }

            // Will be called when user dragging an element
            function _move_elem( e ) {
                x_pos = document.all ? window.event.clientX : e.pageX;
                y_pos = document.all ? window.event.clientY : e.pageY;
                if ( selected !== null ) {
                    selected.style.left = (x_pos - x_elem) + 'px';
                    selected.style.top = (y_pos - y_elem) + 'px';
                }
            }

            // Destroy the object when we are done
            function _destroy() {
                selected = null;
            }

            // Bind the functions...
            object.onmousedown = function () {
                _drag_init( this );
                return false;
            };

            document.onmousemove = _move_elem;
            document.onmouseup = _destroy;

        });
    }

    handleSelectionChange(e) {
        this.props.onSelectionChange(e);
    }

    componentDidMount() {
        this.draggable();
    }

    render() {
        return (
            <div className="Playground" onClick={this.handleSelectionChange}>
                {this.props.colours.map(colour => (
                    <PlaygroundSwatch key={colour.name} colour={colour.value} current={this.props.current}/>
                ))}
            </div>
        )
    }
}

export default Playground;