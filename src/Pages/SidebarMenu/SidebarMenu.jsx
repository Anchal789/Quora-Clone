// import { Button } from "@mui/material";
import React, { useContext } from "react";
import "./SidebarMenu.css";
// import AddIcon from "@mui/icons-material/Add";
import { MyContext } from "../../context/Mycontext";

const SidebarMenu = () => {
  const mycontext = useContext(MyContext);
  return (
    <div className="sibebarMenu">
      <div
        className="menuOption"
        onClick={() => {
          mycontext.setAnotherFeed("false");
          mycontext.setQuestionDatabase("history");
          mycontext.setFollowing("");
        }}
        style={{
          backgroundColor:
            mycontext.questionDatabase === "history" ? "#FF680D" : null,
          borderRadius: "40px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="History"
        />
        <h6
          style={{
            color: mycontext.questionDatabase === "history" ? "white" : null,
          }}
          className="menu_name"
        >
          History
        </h6>
      </div>
      <div
        className="menuOption"
        onClick={() => {
          mycontext.setAnotherFeed("false");
          mycontext.setQuestionDatabase("business");
          mycontext.setFollowing("");
        }}
        style={{
          backgroundColor:
            mycontext.questionDatabase === "business" ? "#FF680D" : null,
          borderRadius: "40px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80"
          alt="Business"
        />
        <h6
          style={{
            color: mycontext.questionDatabase === "business" ? "white" : null,
          }}
          className="menu_name"
        >
          Business
        </h6>
      </div>
      <div
        className="menuOption"
        onClick={() => {
          mycontext.setAnotherFeed("false");
          mycontext.setQuestionDatabase("psychology");
          mycontext.setFollowing("");
        }}
        style={{
          backgroundColor:
            mycontext.questionDatabase === "psychology" ? "#FF680D" : null,
          borderRadius: "40px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt="Psychology"
        />
        <h6
          style={{
            color: mycontext.questionDatabase === "psychology" ? "white" : null,
          }}
          className="menu_name"
        >
          Psychology
        </h6>
      </div>
      <div
        className="menuOption"
        onClick={() => {
          mycontext.setAnotherFeed("false");
          mycontext.setQuestionDatabase("cooking");
          mycontext.setFollowing("");
        }}
        style={{
          backgroundColor:
            mycontext.questionDatabase === "cooking" ? "#FF680D" : null,
          borderRadius: "40px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Cooking"
        />
        <h6
          style={{
            color: mycontext.questionDatabase === "cooking" ? "white" : null,
          }}
          className="menu_name"
        >
          Cooking
        </h6>
      </div>
      <div
        className="menuOption"
        onClick={() => {
          mycontext.setAnotherFeed("false");
          mycontext.setQuestionDatabase("music");
          mycontext.setFollowing("");
        }}
        style={{
          backgroundColor:
            mycontext.questionDatabase === "music" ? "#FF680D" : null,
          borderRadius: "40px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Music"
        />
        <h6
          style={{
            color: mycontext.questionDatabase === "music" ? "white" : null,
          }}
          className="menu_name"
        >
          Music
        </h6>
      </div>
      <div
        className="menuOption"
        onClick={() => {
          mycontext.setAnotherFeed("false");
          mycontext.setQuestionDatabase("science");
          mycontext.setFollowing("");
        }}
        style={{
          backgroundColor:
            mycontext.questionDatabase === "science" ? "#FF680D" : null,
          borderRadius: "40px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1952&q=80"
          alt="Science"
        />
        <h6
          style={{
            color: mycontext.questionDatabase === "science" ? "white" : null,
          }}
          className="menu_name"
        >
          Science
        </h6>
      </div>
      <div
        className="menuOption"
        onClick={() => {
          mycontext.setAnotherFeed("false");
          mycontext.setQuestionDatabase("health");
          mycontext.setFollowing("");
        }}
        style={{
          backgroundColor:
            mycontext.questionDatabase === "health" ? "#FF680D" : null,
          borderRadius: "40px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=499&q=80"
          alt="Health"
        />
        <h6
          style={{
            color: mycontext.questionDatabase === "health" ? "white" : null,
          }}
          className="menu_name"
        >
          Health
        </h6>
      </div>
      <div
        className="menuOption"
        onClick={() => {
          mycontext.setAnotherFeed("false");
          mycontext.setQuestionDatabase("movies");
          mycontext.setFollowing("");
        }}
        style={{
          backgroundColor:
            mycontext.questionDatabase === "movies" ? "#FF680D" : null,
          borderRadius: "40px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="Movies"
        />
        <h6
          style={{
            color: mycontext.questionDatabase === "movies" ? "white" : null,
          }}
          className="menu_name"
        >
          Movies
        </h6>
      </div>
      <div
        className="menuOption"
        onClick={() => {
          mycontext.setAnotherFeed("false");
          mycontext.setQuestionDatabase("technology");
          mycontext.setFollowing("");
        }}
        style={{
          backgroundColor:
            mycontext.questionDatabase === "technology" ? "#FF680D" : null,
          borderRadius: "40px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1628126235206-5260b9ea6441?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Technology"
        />
        <h6
          style={{
            color: mycontext.questionDatabase === "technology" ? "white" : null,
          }}
          className="menu_name"
        >
          Technology
        </h6>
      </div>
      <div
        className="menuOption"
        onClick={() => {
          mycontext.setAnotherFeed("false");
          mycontext.setQuestionDatabase("education");
          mycontext.setFollowing("");
        }}
        style={{
          backgroundColor:
            mycontext.questionDatabase === "education" ? "#FF680D" : null,
          borderRadius: "40px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Education"
        />
        <h6
          style={{
            color: mycontext.questionDatabase === "education" ? "white" : null,
          }}
          className="menu_name"
        >
          Education
        </h6>
      </div>
    </div>
  );
};

export default SidebarMenu;
