import type { NextPage } from 'next';

import LoginPage from "./app/pages/login/LoginPage";
import HomePage from './app/pages/home/HomePage';

const Home: NextPage = () => {
  const isLogged: boolean = true;

  if(isLogged) {
    return (
      <HomePage />
    )
  } else {
    return (
      <LoginPage />
    )
  }
}

export default Home
