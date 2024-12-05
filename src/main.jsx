import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Allvisas from './Components/Allvisas';
import Login from './Components/Login';
import Regstration from './Components/Regstration';
import Errorpage from './Components/Errorpage';
import Addvisa from './Components/Addvisa';
import Myaddedvisa from './Components/Myaddedvisa';
import Myvisaapplication from './Components/Myvisaapplication';
import Authprovider from './Components/Provider/Authprovider';
import Visadetails from './Components/Visadetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    
    children: [
      {
        path: "/",
        element: <Navigate to = "/home" replace = {true}></Navigate>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: "/allvisas",
        element: <Allvisas></Allvisas>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Regstration></Regstration>
      },
      {
        path: '/addvisa',
        element: <Addvisa></Addvisa>
      },
      {
        path: '/myaddedvisa',
        element: <Myaddedvisa></Myaddedvisa>
      },
      {
        path: '/myvisaapplication',
        element: <Myvisaapplication></Myvisaapplication>
      },
      {
        path: '/visadetails',
        element: <Visadetails></Visadetails>
      }
      
    ]    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
        <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </StrictMode>,
)
