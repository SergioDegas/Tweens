import { GlobalStyle } from 'GlobalStyles';
import ErrorPage from 'Page/ErrorPage/ErrorPage';
import Home from 'Page/Home/Home';
import TweetsCards from 'Page/TweetsCards/TweetsCards';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Route,  Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tweets" element={<TweetsCards />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
