import React, { Component } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Holder = styled.div`
  width: 45px;
  height: 30px;
  position: relative;
`;

const animate = keyframes`
  0% {
    transform: translateX(0);
    z-index: 1;
  }
  50% {
    transform: translateX(125%);
    z-index: 1;
  }
  51% {
    transform: translateX(125%);
    z-index: 0;
  }
  100% {
    transform: translateX(0);
    z-index: 0;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid;
  background-color: ${props => props.theme.colours.black};
  top: 0;
  left: 0;
  animation: ${animate} 4s ease-in-out ${props => props.delay} infinite;
`;

class IconBasics extends Component {
    render() {
        return (
            <Holder>
              <Circle delay="2s"/>
              <Circle/>
            </Holder>
        )
    }
}

export default IconBasics;