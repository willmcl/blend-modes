// Colour converters

export function rgbToChannels( value ) {
    let string = value.replace( 'rgb(', '' );
    string = string.replace( ')', '' );
    let channels = string.split( ', ' );

    return [ channels[ 0 ], channels[ 1 ], channels[ 2 ] ];
}

export function rgbToBinary( value ) {
    let string = value.replace( 'rgb(', '' );
    string = string.replace( ')', '' );
    let channels = string.split( ', ' ),
        rBin = (channels[ 0 ] / 255).toFixed( 2 ),
        gBin = (channels[ 1 ] / 255).toFixed( 2 ),
        bBin = (channels[ 2 ] / 255).toFixed( 2 );

    return [ rBin, gBin, bBin ];
}

export function binaryToRgb( binArray ) {
    return binArray.map( x => ( x * 255).toFixed( 0 ) );
}

// --------------- Draggable
export function draggable() {

    let objects = document.querySelectorAll( '.PlaygroundCircle' );

    let selected = null, // Object of the element to be moved
        x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
        x_elem = 0, y_elem = 0, // Stores top, left values (edge) of the element
        z = 7;

    for ( let i = 0; i < objects.length; ++i ) {

        let object = objects[ i ];

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

    }
}