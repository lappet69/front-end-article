import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Button, Layout } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import Home from './pages/Home/Home';
import { News } from './interfaces/news.interface';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import NavHeader from './components/NavHeader';


const App: FC = () => {

  return (

    <Layout className="layout">
      <NavHeader />
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </Layout >
  )
}
export default App;
