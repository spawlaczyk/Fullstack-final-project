import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/global.scss';

import MainLayout from './components/layouts/MainLayout/MainLayout';
import NotFound from './components/views/NotFound/NotFound';
import Homepage from './components/views/Homepage/Homepage';
import SingleProduct from './components/features/SingleProduct/SingleProduct';
import Order from './components/features/Order/Order';

const App = () => {

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/order' element={<Order />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
