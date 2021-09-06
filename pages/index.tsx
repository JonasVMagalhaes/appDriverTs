import type { NextPage } from 'next';
import { Provider } from 'react-redux';

import { Store } from './app/store';

import LoginPage from "./app/pages/login";

const Home: NextPage = () => {
  return (
    <Provider store={Store}>
      <LoginPage />
    </Provider>
  )
}

export default Home;