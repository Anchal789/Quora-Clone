import React from "react";
import "./Querybox.css";
import { Avatar } from "@mui/material";

const QueryBox = () => {
  const loginCred = JSON.parse(localStorage.getItem("loginCred"));
  return (
    <div className="queryBox">
      <div className="queryBox_info">
        <Avatar src={loginCred.image} />
        <h5>{loginCred.name}</h5>
      </div>
      <div className="queryBox_quora">
        <input type="text" placeholder="What do you you want to ask or share?" />
        <p></p>
      </div>
    </div>
  );
};

export default QueryBox;
