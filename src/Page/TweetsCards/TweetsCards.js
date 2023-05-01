import UserCards from 'components/UserCards/UserCarads';

import Hansel from '../../Image/Hansel.png';
import { useState } from 'react';

function TweetsCards() {
  const [avatar, setAvatar] = useState(Hansel);
  return (
    <>
      <h1> Tweets Page</h1>
      <UserCards avatar={avatar} />
    </>
  );
}
export default TweetsCards;
