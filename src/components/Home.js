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
    <div>
      <MyNav/>
      <main className='mt-4 p-3'>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
