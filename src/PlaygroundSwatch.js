import React, { Component } from 'react';
import styled from 'styled-components';

const Swatch = styled.div.attrs( ( { backgroundColor, mixBlendMode } ) => ({
    style: {
        backgroundColor: backgroundColor,
        mixBlendMode: mixBlendMode,
    }
}) )`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  &:first-child { border: 1px solid black; }
  &:nth-child(2) { left: 70px; }
  &:nth-child(3) { left: 130px; }
  &:nth-child(4) { left: 190px; }
  &:nth-child(5) { left: 10px; top: 120px; }
  &:nth-child(6) { left: 70px; top: 120px; }
  &:nth-child(7) { left: 130px; top: 120px; }
  &:nth-child(8) { left: 190px; top: 120px; }
  &:nth-child(9) { display: none; }
  
  @media(${props => props.theme.breakpoints.md}){
    width: 150px;
    height: 150px;
    &:nth-child(2) { left: 130px; }
    &:nth-child(3) { left: 250px; }
    &:nth-child(4) { left: 380px; }
    &:nth-child(5) { left: 10px; top: 130px; }
    &:nth-child(6) { left: 130px; top: 130px; }
    &:nth-child(7) { left: 250px; top: 130px; }
    &:nth-child(8) { left: 380px; top: 130px; }
    &:nth-child(9) { display: block; left: 10px; top: 250px; }
  }
`;

class PlaygroundSwatch extends Component {

    render() {
        return (
            <Swatch className="PlaygroundSwatch" backgroundColor={this.props.colour} mixBlendMode={this.props.current.name}>
            </Swatch>
        )
    }
}

export default PlaygroundSwatch;