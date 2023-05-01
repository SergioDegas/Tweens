
import { Button, ContainerHome, Emoji, WelcomeTitle } from "./Home.styled";

function Home() {
  return (
    <>
      <ContainerHome>
        <WelcomeTitle>Hi there! You are on the TweetsGram page</WelcomeTitle>
        <Emoji>&#128075;&#127995;</Emoji>
        <Button to="/tweets">Go to tweets</Button>
      </ContainerHome>
    </>
  );
}
export default Home;
