import Logo from "../../Image/Logo.png"
import Picture from '../../Image/picture.png';
import { ContainerCard, HanselImage, UserImage } from "./UserCard.styled";
import Hansel from '../../Image/Hansel.png';

function UserCards() {
  return (
    <>
      <ContainerCard>
        <img src={Logo} alt="Logo" />
        <img src={Picture} alt="just pictures" />
        <UserImage>
          <HanselImage src={Hansel} alt="Hansel" />
        </UserImage>
        <div>Tweets</div>
        <div>Followers</div>
        <button type="submit"> Follow</button>
      </ContainerCard>
    </>
  );
}
export default UserCards;
