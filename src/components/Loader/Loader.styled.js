import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0%,
  100% {
    box-shadow: .2em 0px 0 0px currentcolor;
  }
  12% {
    box-shadow: .2em .2em 0 0 currentcolor;
  }
  25% {
    box-shadow: 0 .2em 0 0px currentcolor;
  }
  37% {
    box-shadow: -.2em .2em 0 0 currentcolor;
  }
  50% {
    box-shadow: -.2em 0 0 0 currentcolor;
  }
  62% {
    box-shadow: -.2em -.2em 0 0 currentcolor;
  }
  75% {
    box-shadow: 0px -.2em 0 0 currentcolor;
  }
  87% {
    box-shadow: .2em -.2em 0 0 currentcolor;
  }
`;

export const Spinner = styled.div`
  transform: rotateZ(45deg);
  perspective: 1000px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: #4B2A99;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: 1s ${spin} linear infinite;
  }

  &:after {
    color: #ff3d00;
    transform: rotateY(70deg);
    animation-delay: 0.4s;
  }
`;


export const Container = styled.div`
  position: fixed;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
`;
