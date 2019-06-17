import React, { Component } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Holder = styled.div`
  width: 45px;
  height: 20px;
  position: relative;
`;

const animate = keyframes`
  0% { transform: translateX(0) translateY(0); }
  25% { transform: translateX(200%) translateY(-100%); }
  50% { transform: translateX(200%) translateY(0); }
  75% { transform: translateX(0) translateY(-100%); }
  100% { transform: translateX(0) translateY(0); }
`;

const Circle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid;
  top: 0;
  left: 0;
  animation: ${animate} 3s linear ${props => props.delay} infinite;
`;

class IconPlayground extends Component {
    render() {
        return (
            <Holder>
              <Circle delay="2.25s"/>
              <Circle delay="1.5s"/>
              <Circle delay="0.75s"/>
              <Circle/>
            </Holder>
        )
    }
}

export default IconPlayground;