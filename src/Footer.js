import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    grid-column-gap: 2rem;
    @media(${props => props.theme.breakpoints.md}) {
      order: 1;
      grid-template-columns: 1fr 1fr;
    }
    p {
      margin: 0;
      &:last-child {
        @media(${props => props.theme.breakpoints.md}) {
          text-align: right;
        }
      }
    }
`;

class Footer extends Component {
    render() {
        return (
            <Holder>
              <p className="small">A project by <a href="https://wills-websites.com" target="_blank" rel="noopener noreferrer">Will's
                Websites</a></p>
              <p className="small">Please report requests, issues or errors in the github <a href="https://github.com/willmcl/blend-modes/issues" target="_blank" rel="noopener noreferrer">issue list.</a></p>
            </Holder>
        )
    }
}

export default Footer;