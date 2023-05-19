import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Components/Layouts/Main';
import Home from '../components/pages/home/Home/Home';
import Blog from '../components/pages/Blog/Blog';
import ErrorPage from '../components/pages/shared/ErrorPage/ErrorPage';
import All_Toys from '../components/pages/All_Toys/All_Toys';
import My_Toys from '../components/pages/My_Toys/My_Toys';
import Add_A_Toys from '../components/pages/Add_A_Toys/Add_A_Toys';
import LogIn from '../components/pages/LogIn/LogIn';
import Register from '../components/pages/Register/Register';
import Toy_Details from '../components/pages/Toy_Details/Toy_Details';
import PrivateRout from './PrivateRout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/allToys",
        element: <All_Toys />,
        loader: () => fetch('http://localhost:5000/toys')
      },
      {
        path: "/toy/:id",
        element: <PrivateRout><Toy_Details /></PrivateRout>,
        loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: "/myToys",
        element: <My_Toys />
      },
      {
        path: "/addAToys",
        element: <Add_A_Toys />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/logIn",
        element: <LogIn />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },
]);

export default router;