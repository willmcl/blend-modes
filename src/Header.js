import React, { Component } from 'react';
import styled from 'styled-components';
import professor from './assets/professor.png';

const Holder = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
  .info {
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
    
  }
  
  .heading {
    display: flex;
    align-items: flex-end;
    @media(${props => props.theme.breakpoints.md}) {
      order: 2;
    }
    h1 {
      margin-top: 0;
      @media(${props => props.theme.breakpoints.md}) {
        margin-bottom: 0;
      }
    }
    img {
      width: auto;
      height: 6rem;
      margin-bottom: 2rem;
      @media(${props => props.theme.breakpoints.sm}) {
        margin-bottom: 3rem;
      }
      @media(${props => props.theme.breakpoints.md}) {
        height: 8rem;
        margin-bottom: 1rem;
      }
      @media(${props => props.theme.breakpoints.lg}) {
        height: 12rem;
        margin-bottom: 2rem;
      }
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <Holder>
        <div className="heading">
          <h1>Blend modes explained</h1>
          <img src={professor} alt="professor"/>
        </div>
        <div className="info">
          <p className="small">A project by <a href="https://wills-websites.com" target="_blank" rel="noopener noreferrer">Will's
            Websites</a></p>
          <p className="small">Please report requests, issues or errors in the github <a href="https://github.com/willmcl/blend-modes/issues" target="_blank" rel="noopener noreferrer">issue list.</a></p>
        </div>
      </Holder>
    )
  }
}

export default Header;