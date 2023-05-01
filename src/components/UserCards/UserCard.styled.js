import styled from 'styled-components';


export const CardBox = styled.div`
  position: relative;
  width: 380px;
  height: 499px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
`;
export const Logo = styled.img`
  padding-top: 20px;
  padding-left: 20px;
`;
export const Hero = styled.img`
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileBox = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  width: 380px;
  height: 80px;
  &::after {
    content: '';
    position: absolute;
    top: 36px;
    left: 0;
    width: 380px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const ProfileThumb = styled.div`
  position: absolute;
  top: 0;
  left: 150px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const ProfileImage = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const DescriptionBox = styled.div`
  margin-top: 80px;
  text-align: center;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Tweets = styled.p`
  margin-bottom: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
export const Followers = styled.p`
  margin-bottom: 26px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const FollowBtn = styled.button`
  width: 196px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  margin-left: auto;
  margin-right: auto;
`;
export const FollowBtnActive = styled.button`
  width: 196px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  margin-left: auto;
  margin-right: auto;
`;


