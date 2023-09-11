import React, { createContext, useReducer } from 'react';

import Layout from './pages/Layout';
import About from "./components/AboutUs/AboutUs";
import Newsletter from "./components/Newsletter/Newsletter";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Teacher from "./components/Teacher/Teacher";
import LoginStudent from "./components/LoginStudent/LoginStudent";
import SignupStudent from "./components/SignupStudent/SignupStudent";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyCourses from './components/StudentPage/MyCourses';
import Cart from './components/StudentPage/Cart';
import {red,initial} from "./UseRed";

export const MailContext=createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "news",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "teacher",
        element: <Teacher />,
      },
      {
        path: "stulogin",
        element: <LoginStudent />,
      },
      {
        path: "stusignup",
        element: <SignupStudent />,
      },
      {
        path: "mycourse",
        element: <MyCourses />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const App=()=>{
  const [s,dis]=useReducer(red,initial);
    return (
      <MailContext.Provider value={{s,dis}}> 
        <RouterProvider router={router} />
        </MailContext.Provider>
    )
}

export default App;