import React from "react";
import {
  Routes,
  Route,
  useRoutes,
  useLocation,
  Outlet,
} from "react-router-dom";

import MyNav from "./MyNav";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="">
      <MyNav/>
      <div className='mt-4 p-3'>
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
