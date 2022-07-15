import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import './styles/global.scss';

import { MainLayout } from './components/layouts/MainLayout/MainLayout';
import { NotFound } from './components/views/NotFound/NotFound';
import { Homepage } from './components/views/Homepage/Homepage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Homepage />
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
