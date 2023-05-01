import {
  CardBox,
  DescriptionBox,
  Followers,
  Hero,
  List,
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
 console.log(filteredUsers);

  return (
    <>
      <List>
        {filteredUsers.map(({ avatar, name, tweets, followers, id }) => {
          const activeToggle = () => {
            dispatch(toggleFollowing(id));
          };
           
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
                  <Followers>{followers} FOLLOWERS</Followers>
                </DescriptionBox>
                <FollowButton onClick={activeToggle} follow={active(id)} />
              </CardBox>
            </li>
          );
        })}
      </List>
    </>
  );
}

export default UserCards;
