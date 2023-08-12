import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
// import { MyContext } from "../../context/Mycontext";
// import Logout from "../LogoutPage/Logout";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Widgets from "../Widgets/Widgets";
import "./Home.css";
import { MyContext } from "../../context/Mycontext";
import AnotherFeed from "../AnotherFeed/AnotherFeed";

const Home = () => {
  const mycontext = useContext(MyContext);

  return (
    <div className="quora">
      <Navbar />
      <div className="quora_content">
        <Sidebar />
        {mycontext.anotherFeed === "true" ? <AnotherFeed /> : <Feed />}
        {/* <Feed /> */}
        <Widgets />
      </div>
    </div>
  );
};

export default Home;
