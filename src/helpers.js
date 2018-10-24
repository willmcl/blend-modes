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

export function isOver( element, e ) {

    // Detect if a click is within the circular swatch
    // -----------------------------------------------
    // To test if a point is within a circle, you want to determine if the distance
    // between the given point and the center of the circle is smaller than the radius of the circle.
    // -----------------------------------------------
    // SRC: https://stackoverflow.com/questions/16792841/detect-if-user-clicks-inside-a-circle#16792888


    let radius = element.clientWidth / 2,
        elBounds = element.getBoundingClientRect(),
        center = {
            'x': elBounds.left + radius,
            'y': elBounds.top + radius
        },
        distanceClickToCenter = Math.sqrt( ( e.clientX - center.x ) * ( e.clientX - center.x ) + ( e.clientY - center.y ) * ( e.clientY - center.y ) );

    return ( distanceClickToCenter < radius );
}