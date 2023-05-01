
import { FollowBtn } from "./UserCard.styled";




const FollowButton = ({ onClick, follow }) => {
  return (
    <FollowBtn
      type="button"
      onClick={onClick}
      className={follow ? 'following' : null}
    >
      {follow ? 'following' : 'follow'}
    </FollowBtn>
  );
};

export default FollowButton;