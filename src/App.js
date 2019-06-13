import React, { Component } from 'react';
import './App.css';
import Selector from './Selector.js';
import Playground from './Playground.js';
import Basics from './Basics.js';
import Desc from './Desc.js';
import Data from './Data.js';
import { isOver } from './helpers';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { theme } from './utils/styling';
import Header from './Header';

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
    'value': 'rgb(128, 0, 255)',
    'name': 'purple',
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
  {
    'value': 'rgb(255, 255, 0)',
    'name': 'yellow',
    'zIndex': 0,
  },
  {
    'value': 'rgb(255, 128, 0)',
    'name': 'orange',
    'zIndex': 0,
  },
];

const modes = [
  {
    'name': 'multiply',
    'displayName': 'Multiply',
    'description': [
      'Multiply is expressed by f(a, b) = ab',
      'It makes everything darker as multiplying 2 values between 0 and 1 will always result in a number closer to 0 - which means closer to black.',
      'This mode is symmetric. Changing the order of the layers does not effect the result.',
    ],
    'formula': function ( a, b ) {
      return a * b;
    },
    'displayFormula': 'f(a, b) = ab',
  },
  {
    'name': 'screen',
    'displayName': 'Screen',
    'description': [
      'Screen is expressed by f(a, b) = 1 - (1 - a)(1 - b)',
      'The values of the pixels are inverted, multiplied, and then inverted again. This yields the opposite effect to multiply. The result is a brighter colour.',
      'This mode is symmetric. Changing the order of the layers does not effect the result.',
    ],
    'formula': function ( a, b ) {
      return 1 - (1 - a) * (1 - b);
    },
    'displayFormula': 'f(a, b) = 1 - (1 - a)(1 - b)',
  },
  {
    'name': 'difference',
    'displayName': 'Difference',
    'description': [
      'Difference is expressed by f(a, b) = | a - b | \n\nThis is the difference between the two values and is calculated by the absolute value of the base layer minus the top layer.',
      'This mode is great as it results in some vibrant and unexpected colour combos.',
    ],
    'formula': function ( a, b ) {
      return Math.abs( a - b );
    },
    'displayFormula': 'f(a, b) = | a - b |',
  },
  {
    'name': 'overlay',
    'displayName': 'Overlay',
    'description': [ 'If a < 0.5 then overlay is expressed by f(a, b) = 2ab otherwise it is expressed as 1 - 2(1 - a)(1 - b)',
      'Overlay combines multiply and screen modes. If the base layer is light an extreme version of screen mode is used, if the base layer is dark an extreme version of multiply is used.',
    ],
    'formula': function ( a, b ) {
      if ( a <= 0.5 ) {
        return 2 * a * b;
      } else {
        return 1 - 2 * (1 - a) * (1 - b);
      }
    },
    'displayFormula': 'f(a, b) = if( a <= 0.5 ) { 2ab } else { 1 - 2(1 - a)(1 - b) }',
  },
  {
    'name': 'darken',
    'displayName': 'Darken',
    'description': [ 'Darken is expressed by f(a, b) = min(a, b)',
      'Selects the darker value for each of the channels for the base and top layer.',
      'This mode is symmetric. Changing the order of the layers does not effect the result.',
    ],
    'formula': function ( a, b ) {
      return Math.min( a, b );
    },
    'displayFormula': 'f(a, b) = min(a, b)',
  },
  {
    'name': 'lighten',
    'displayName': 'Lighten',
    'description': [
      'Lighten is expressed by f(a, b) = max(a, b)',
      'Selects the lighter value for each of the channels for the base and top layer.',
      'This mode is symmetric. Changing the order of the layers does not effect the result.',
    ],
    'formula': function ( a, b ) {
      return Math.max( a, b );
    },
    'displayFormula': 'f(a, b) = max(a, b)',
  },
  {
    'name': 'color-dodge',
    'displayName': 'Color dodge',
    'description': [
      'If a = 0 then color-dodge is expressed by f(a, b) = 0 and if b = 1 then color-dodge is expressed by f(a, b) = 1 otherwise it is expressed as f(a, b) = min(1, a / (1 - b))',
      'This lightens the bottom layer depending on the value of the top layer: the brighter the top layer, the more its color affects the bottom layer. Blending any color with white gives white. Blending with black does not change the image.',
    ],
    'formula': function ( a, b ) {
      if ( a === 0 ) {
        return 0;
      } else if ( b === 1 ) {
        return 1;
      } else {
        return Math.min( 1, a / (1 - b) );
      }
    },
    'displayFormula': 'f(a, b) = if( a = 0 ){ 0 } else if( b = 1 ){ 1 } else { min(1, a / (1 - b)) }',
  },
  {
    'name': 'color-burn',
    'displayName': 'Color burn',
    'description': [
      'If a = 1 then color-burn is expressed by f(a, b) = 1 and if b = 0 then color-burn is expressed by f(a, b) = 0 otherwise it is expressed as f(a, b) = 1 - min(1, (1 - a) / b)',
      'This divides the inverted base layer by the top layer, and then inverts the result. This darkens the top layer increasing the contrast to reflect the color of the base layer. The darker the base layer, the more its color is used. Blending with white produces no difference.'
    ],
    'formula': function ( a, b ) {
      if ( a === 1 ) {
        return 1;
      } else if ( b === 0 ) {
        return 0;
      } else {
        return 1 - Math.min( 1, (1 - a) / b );
      }
    },
    'displayFormula': 'f(a, b) = if( a = 1 ){ 1 } else if( b = 0 ){ 0 } else { 1 - min( 1, (1 - a) / b ) }',
  },
  {
    'name': 'hard-light',
    'displayName': 'Hard light',
    'description': [ 'If b <= 0.5 then overlay is expressed by f(a, b) = 2ab otherwise it is expressed as f(a, b) = 1 - (1 - a) * (1 - (2 * b - 1))',
      'Overlay combines multiply and screen modes. If the top layer is light an extreme version of screen mode is used, if the top layer is dark an extreme version of multiply is used.',
    ],
    'formula': function ( a, b ) {
      if ( b <= 0.5 ) {
        return 2 * a * b;
      } else {
        return 1 - (1 - a) * (1 - (2 * b - 1));
      }
    },
    'displayFormula': 'f(a, b) = if( b <= 0.5 ) { 2ab } else { 1 - (1 - a) * (1 - (2 * b - 1)) }',
  },
  {
    'name': 'exclusion',
    'displayName': 'Exclusion',
    'description': [
      'Exclusion is expressed by f(a, b) = a + b - 2ab',
      'Exclusion produces an effect similar to that of the Difference mode but lower in contrast.',
      'This mode is great as it results in some vibrant and unexpected colour combos.',
    ],
    'formula': function ( a, b ) {
      return a + b - 2 * a * b;
    },
    'displayFormula': 'f(a, b) = a + b - 2ab',
  },

];

const FirstRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 4rem;
  @media(${props => props.theme.breakpoints.md}){
    grid-template-columns: 1fr 1fr;
  }
`;

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      current: modes[ 0 ],
      selected: [],
    };

    this.handleModeChange = this.handleModeChange.bind( this );
    this.handleSelectionChange = this.handleSelectionChange.bind( this );
  }

  handleModeChange( modeValue ) {
    this.setState( {
      current: modes.find( x => x.name === modeValue ),
    } )
  }

  handleSelectionChange( e ) {

    let allCircles = document.querySelectorAll( '.PlaygroundSwatch' ),
      selectedColours = [];
    allCircles.forEach(
      function ( currentValue, currentIndex, listObj ) {
        if ( isOver( listObj[ currentIndex ], e ) ) {
          let bg = listObj[ currentIndex ].style.backgroundColor,
            zIndex = listObj[ currentIndex ].style.zIndex;
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

    this.setState( {
      selected: selectedColours,
    } )
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyles/>
          <Header/>
          <FirstRow>
            <Basics/>
            <div>
              <h2>Specifics</h2>
              <Selector
                modes={modes}
                onModeChange={this.handleModeChange}
              />
              <Desc
                current={this.state.current}
              />
            </div>
          </FirstRow>

          <Playground
            colours={colours}
            current={this.state.current}
            onSelectionChange={this.handleSelectionChange}
          />
          <div className="App-row">

            <Data
              current={this.state.current}
              selected={this.state.selected}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
