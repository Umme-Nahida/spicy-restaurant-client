import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Homes/Home/Home';
import OurMenu from '../pages/OurMenu/OurMenu';
import OurShop from '../pages/Order/OurShop/OurShop';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/ourMenu',
            element:<OurMenu></OurMenu>
        },
        {
            path:'/order/:category',
            element:<OurShop></OurShop> 
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
  ]);

export default router;