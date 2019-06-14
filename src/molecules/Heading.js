import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.header`
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
   border-bottom: 1px solid;
   padding-bottom: 1rem;
   margin-bottom: 2rem;
   h2 { margin-bottom: 0; }
`;

class Heading extends Component {
    render() {
        return (
            <Holder>
              {this.props.children}
              <h2>{this.props.text}</h2>
            </Holder>
        )
    }
}

export default Heading;