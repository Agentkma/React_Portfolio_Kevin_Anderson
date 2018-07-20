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

const slideDown = keyframes`
0% {
  -webkit-transform: translateY(-100vh);
          transform: translateY(-100vh);
}
100% {
  -webkit-transform: translateY(0px);
          transform: translateY(0px);
}`;

const scaleInVerTop = keyframes`
0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
}`;

const wobbleHorBottom = keyframes`
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }

`;

const loadingBar = keyframes`
from { transform: scaleX(0); }
  to   { transform: scaleX(1); }`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate360} 2s linear 2s;
`;

export const SlideDown = styled.div`
    animation: ${slideDown} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const ScaleInVerTop = styled.div`
    animation: ${scaleInVerTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const WobbleHorBottom = styled.div`
    animation: ${wobbleHorBottom} 0.8s both;
    animation-play-state: paused;
    &:hover {
        animation-play-state: running;
    }
`;

export const LoadingBar = styled.span`
    animation: 3s linear 1s ${loadingBar};
`;
