import type { NextPage } from 'next';
import { Provider } from 'react-redux';

import { Store } from '../data/store';

import Login from './login';

const Home: NextPage = () => {
  return (
    <Provider store={Store}>
      <Login />
    </Provider>
  )
}

export default Home;