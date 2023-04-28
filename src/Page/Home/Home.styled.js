
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap : 30px;
`;
export const WelcomeTitle = styled.h1`
color : white;
width: 450px;

`
export const Emoji = styled.span`
  background-size: cover;
  display: block;
font-size: 50px;
`;
export const Button = styled(NavLink)`
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #373737;
`;