import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 380px;
  height: 460px;
  border-radius: 20px;
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
`;
export const UserImage = styled.div`
  &:after {
    z-index: -1;
    content: '';

    display: block;
    position: absolute;
    background: #ebd8ff;
    box-shadow: inset 0px 3.43693px 2.5777px #fbf8ff,
      inset 0px -1.71846px 3.43693px #ae7be3;

    width: 380px;
    height: 8px;
  }
  z-index: 2;
  position: relative;
  border-radius: 50%;
  width: 80px;
  height: 80px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 1px -2.19582px 4.39163px #ae7be3,
    inset 1px 4.39163px 3.29372px #fbf8ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const HanselImage = styled.img`
  background-color: #471ca9;
  border-radius: 50%;
 
`;


