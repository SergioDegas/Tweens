import {
  CardBox,
  DescriptionBox,
  Followers,
  Hero,
  Logo,
  Name,
  ProfileBox,
  ProfileImage,
  ProfileThumb,
  Tweets,
} from './UserCard.styled';

import LogoPicture from '../../Image/Logo.png';
import Pictures from '../../Image/picture.png';
import { selectFiltered } from 'Redax/Filter/selector';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFollowing } from 'Redax/Cards/slice';
import { selectFollow } from 'Redax/Cards/selector';
import FollowButton from './Button';

function UserCards() {
  const filteredUsers = useSelector(selectFiltered);
  const follow = useSelector(selectFollow);
  const dispatch = useDispatch();
  const active = id => {
    return follow.includes(id);
  };

  const activeToggle = (id) => {
    dispatch(toggleFollowing(id));
  };

  return (
    <>
      <ul>
        {filteredUsers.map(({ avatar, name, tweets, newFollower, id }) => {
          return (
            <li key={id}>
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
                  <Followers>{newFollower} FOLLOWERS</Followers>
                </DescriptionBox>
                <FollowButton onClick={activeToggle} follow={active(id)} />
              </CardBox>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UserCards;
