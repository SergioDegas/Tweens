import { Button } from "Page/Home/Home.styled";
import { fetchTweets } from "Redax/Cards/operations";
import { selectIsLoading } from "Redax/Cards/selector";
import FilterSelect from "components/FilterSelect/FilterSelect";
import Loader from "components/Loader/Loader";
import UserCards from "components/UserCards/UserCarads";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";




function TweetsCards() {
   const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);


  const dispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchTweets({ page, limit: 3}));
   }, [dispatch, page]);
   const loadMoreHandler = () => {
     setPage(prevState => prevState + 1);
   };
  return (
    <>
      <h1> Tweets Page</h1>
      {!isLoading && <Button to="/">Go back</Button>}

      <FilterSelect />
      {isLoading && <Loader />}
      {!isLoading && <UserCards />}
      {!isLoading && <button onClick={loadMoreHandler}>Load More</button>}
    </>
  );
}
export default TweetsCards;
