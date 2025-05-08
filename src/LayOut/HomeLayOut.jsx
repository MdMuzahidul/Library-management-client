import React from "react";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { Outlet } from "react-router-dom";

const HomeLayOut = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayOut;
