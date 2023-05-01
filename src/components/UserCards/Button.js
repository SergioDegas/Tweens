
import { selectIsLoading } from "Redax/Cards/selector";
import { FollowBtn } from "./UserCard.styled";
import { useSelector } from "react-redux";




const FollowButton = ({ onClick, follow }) => {
 const isLoading = useSelector(selectIsLoading);

    return (
      <>
        {!isLoading && (
          <FollowBtn
            type="button"
            onClick={onClick}
            className={follow ? 'following' : null}
          >
            {follow ? 'following' : 'follow'}
          </FollowBtn>
        )}
      </>
    );
};

export default FollowButton;