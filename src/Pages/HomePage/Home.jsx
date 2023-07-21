import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { MyContext } from "../../context/Mycontext";
import Logout from "../LogoutPage/Logout";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Widgets from "../Widgets/Widgets";
import "./Home.css";

const Home = () => {
  
  return (
    <div className="quora">
      <Navbar />
      <div className="quora_content">
        <Sidebar />
        <Feed/>
        <Widgets />
      </div>
    </div>
  );
};

export default Home;
