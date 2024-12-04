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
      }
      
    ]    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
