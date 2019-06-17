import React, { Component } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Holder = styled.div`
  width: 45px;
  height: 15px;
  position: relative;
`;

const animate = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
`;

const Circle = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid;
  top: 0;
  left: ${props => props.left};
  animation: ${animate} 1s ease-in-out ${props => props.delay} infinite alternate;
`;

class IconPlayground extends Component {
    render() {
        return (
            <Holder>
              <Circle delay="1.5s" left="60px"/>
              <Circle delay="1s" left="40px"/>
              <Circle delay="0.5s" left="20px"/>
              <Circle left="0px"/>
            </Holder>
        )
    }
}

export default IconPlayground;