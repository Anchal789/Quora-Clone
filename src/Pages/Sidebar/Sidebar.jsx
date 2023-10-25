import React, { useContext } from "react";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import "./Sidebar.css";
import { MyContext } from "../../context/Mycontext";

const Sidebar = () => {
  const mycontext = useContext(MyContext);
  const handleOnSelect = (event) => {
    mycontext.setQuestionDatabase(event.target.value);
  };
  return (
    <>
      <div className="sidebar">
        <SidebarMenu />
      </div>
      <div className="sibebarMenuSmallScreen">
          <select name="" id="" onChange={handleOnSelect}>
            {mycontext.questionDatabase === "userPost" ? <option value="history" selected={true}>Interest</option> : ""}
            <option value="history">History</option>
            <option value="business">Business</option>
            <option value="psychology">Psychology</option>
            <option value="cooking">Cooking</option>
            <option value="music">Music</option>
            <option value="science">Science</option>
            <option value="health">Health</option>
            <option value="movies">Movies</option>
            <option value="technology">Technology</option>
            <option value="education">Education</option>
          </select>
      </div>
    </>
  );
};

export default Sidebar;
