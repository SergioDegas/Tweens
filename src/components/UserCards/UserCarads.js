
import {
  CardBox,
  DescriptionBox,
  FollowBtn,
  FollowBtnActive,
  Followers,
  Hero,
  Logo,
  Name,
  ProfileBox,
  ProfileImage,
  ProfileThumb,
  Tweets,
} from './UserCard.styled';
import { useState } from 'react';
import LogoPicture from '../../Image/Logo.png'
import Pictures from '../../Image/picture.png';



function UserCards({ avatar, name, tweets, followers }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(prevActive => !prevActive);
  };
  return (
    <>
      <CardBox>
        <Logo src={LogoPicture} alt="logo" />
        <Hero src={Pictures} alt="pict" />
        <ProfileBox>
          <ProfileThumb>
            <ProfileImage src={avatar} alt="user avatar" />
          </ProfileThumb>
        </ProfileBox>
        <DescriptionBox>
          <Name>{name}</Name>
          <Tweets>{tweets} Tweets</Tweets>
          <Followers>{followers} FOLLOWERS</Followers>
          {active ? (
            <FollowBtnActive onClick={handleClick}>FOLLOWING</FollowBtnActive>
          ) : (
            <FollowBtn onClick={handleClick}>FOLLOW</FollowBtn>
          )}
        </DescriptionBox>
      </CardBox>
    </>
  );
}
export default UserCards;
