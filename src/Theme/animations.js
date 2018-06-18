// import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

// keyframes returns a unique name based on a hash of the contents of the keyframes
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const slideDown = keyframes`0% {
  -webkit-transform: translateY(-100vh);
          transform: translateY(-100vh);
}
100% {
  -webkit-transform: translateY(0px);
          transform: translateY(0px);
}`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate360} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

export const SlideDown = styled.div`
    animation: ${slideDown} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
