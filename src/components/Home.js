import React from "react";
import {
    Outlet
} from "react-router-dom";

import Footer from "./Footer";
import MyNav from "./MyNav";
const Home = () => {
  return (
    <div className="">
      <MyNav/>
      <div className='pb-3'>
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
