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
      <div style={{ backgroundColor: "#F8FAFB" }}>
      <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
