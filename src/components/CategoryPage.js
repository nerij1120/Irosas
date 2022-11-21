import React from "react";
import silderdanhmuc from "../img/CategoryPage/sliderdanhmuc.jpg";
import slider from "../img/CategoryPage/slider.jpg";
import s1 from "../img/CategoryPage/1.jpg";
import s2 from "../img/CategoryPage/2.jpg";
import s3 from "../img/CategoryPage/3.jpg";
import s4 from "../img/CategoryPage/4.jpg";
import s5 from "../img/CategoryPage/5.jpg";
import s6 from "../img/CategoryPage/6.jpg";
import s7 from "../img/CategoryPage/7.jpg";
import s8 from "../img/CategoryPage/8.jpg";
import s9 from "../img/CategoryPage/9.jpg";
import MyNav from "./MyNav";
import Footer from "./Footer";

const CategoryPage = () => {
  return (
    <div>
      <img style={{ width: "100%" }} src={slider} alt="" />
      <div>
        <div>Danh mục thức uống</div>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex flex-row ">
            <img
              style={{ width: "200px", height: "200px", margin: "10px 50px" }}
              src={s1}
              alt=""
            />
            <img
              style={{ width: "200px", height: "200px", margin: "10px 50px" }}
              src={s2}
              alt=""
            />
            <img
              style={{ width: "200px", height: "200px", margin: "10px 50px" }}
              src={s3}
              alt=""
            />
          </div>
          <div className="d-flex flex-row  ">
            <img
              style={{ width: "200px", height: "200px", margin: "10px 50px" }}
              src={s4}
              alt=""
            />
            <img
              style={{ width: "200px", height: "200px", margin: "10px 50px" }}
              src={s5}
              alt=""
            />
            <img
              style={{ width: "200px", height: "200px", margin: "10px 50px" }}
              src={s6}
              alt=""
            />
          </div>
          <div className="d-flex flex-row  ">
            <img
              style={{ width: "200px", height: "200px", margin: "10px 50px" }}
              src={s7}
              alt=""
            />
            <img
              style={{ width: "200px", height: "200px", margin: "10px 50px" }}
              src={s8}
              alt=""
            />
            <img
              style={{ width: "200px", height: "200px", margin: "10px 50px" }}
              src={s9}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
