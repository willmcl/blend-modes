import React, { Component } from 'react';
import IconBasics from './atoms/IconBasics';
import Heading from './molecules/Heading';

class Basics extends Component {
  render() {
    return (
      <div className="Basics">
        <Heading text="Basics"><IconBasics/></Heading>
        <p>The Normal blend mode can be represented by: <em>f(a, b) = b</em> where a is the base layer and b is the top
          layer.</p>
        <p>So every pixel where the two layers overlap will be the value of the top layer (b).</p>
        <p>If the base layer is white (0, 0, 0) and the top layer is black (1, 1, 1) the colour of the pixel shown will
          be (1, 1, 1).</p>
        <p>If the base layer is black (1, 1, 1) and the top layer is white (0, 0, 0) the colour of the pixel shown will
          be (0, 0, 0).</p>
      </div>
    )
  }
}

export default Basics;