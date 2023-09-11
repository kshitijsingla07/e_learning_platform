import React, { Fragment, useReducer, createContext } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { initialState,reducer } from "./UseReducer";
import HeaderStudent from "../components/Header/HeaderStudent";

export const UserContext=createContext();

const Layout = () => {
  const [state,dispatch]=useReducer(reducer,initialState);
    return (
      <UserContext.Provider value={{state,dispatch}} >
      <Fragment>
        {state?<HeaderStudent />:<Header />}
        <div id="mainContent">
        <Outlet/>
        </div>
        <Footer />
      </Fragment>
      </UserContext.Provider>
    );
  };
  
export default Layout;