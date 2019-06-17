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
  }
  50% {
    transform: translateX(125%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid;
  top: 0;
  left: 0;
  animation: ${animate} 4.5s ease-in-out ${props => props.delay} infinite;
`;

class IconSpecifics extends Component {
    render() {
        return (
            <Holder>
              <Circle delay="3s"/>
              <Circle delay="1.5s"/>
              <Circle/>
            </Holder>
        )
    }
}

export default IconSpecifics;