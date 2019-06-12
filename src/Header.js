import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
  .info {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2rem;
    @media(${props => props.theme.breakpoints.md}) {
      order: 1;
      grid-template-columns: 1fr 1fr;
    }
    p {
      ${props => props.theme.typeStyles( -2 )};
      margin: 0;
      &:last-child {
        text-align: right;
      }
    }
    
  }
  h1 {
    margin: 0;
    @media(${props => props.theme.breakpoints.md}) {
      order: 2;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <Holder>
        <h1>Blend modes explained</h1>
        <div className="info">
          <p>A project by <a href="http://willmclean.net" target="_blank" rel="noopener noreferrer">Will
            McLean</a></p>
          <p>Please report requests, issues or errors in the github <a href="https://github.com/willmcl/blend-modes/issues" target="_blank" rel="noopener noreferrer">issue list.</a></p>
        </div>
      </Holder>
    )
  }
}

export default Header;