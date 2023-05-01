
import { useSelector } from "react-redux";
import { Button, ContainerHome, Emoji, WelcomeTitle } from "./Home.styled";
import { selectIsLoading } from "Redax/Cards/selector";

function Home() {
    const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <ContainerHome>
        <WelcomeTitle>Hi there! You are on the TweetsGram page</WelcomeTitle>
        <Emoji>&#128075;&#127995;</Emoji>
  
        {!isLoading && <Button to="/tweets">Go to tweets</Button>}
      </ContainerHome>
    </>
  );
}
export default Home;
