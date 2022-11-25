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
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Home;
