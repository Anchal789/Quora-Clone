import React from "react";
import "./Querybox.css";
import { Avatar } from "@mui/material";
// import { MyContext } from "../../context/Mycontext";

const QueryBox = () => {
  const loginCred = JSON.parse(localStorage.getItem("loginCred"));
  // const mycontext = useContext(MyContext);

  return (
    <div className="queryBox">
      <div className="queryBox_info">
        <Avatar src={loginCred.image} />
        <h5>{loginCred.name || loginCred.email.split("@")[0]}</h5>
      </div>
      <div className="queryBox_quora">
        {/* <h3>{mycontext.questionDatabase === "userPost" ? "Home" : mycontext.questionDatabase.toUpperCase()}</h3> */}
      </div>
    </div>
  );
};

export default QueryBox;
