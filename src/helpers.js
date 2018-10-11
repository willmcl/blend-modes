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