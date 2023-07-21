import React, { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const MyContext = createContext();

const MycontextProvider = (props) => {
  const [state, setState] = useState({
    email : "",
    image : "",
    name: "",
  });

  const [questionDatabase, setQuestionDatabase] = useState("history");
 
  const [login, setLogin] = useState(false);
  const loginStatus = () => {
    setLogin(!login);
  };

  const unpdateContext = (key, value) => {
    setState({ ...state, [key]: value });
  };
  return (
    <MyContext.Provider value={{ state,setState, unpdateContext, login, loginStatus,questionDatabase,setQuestionDatabase }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MycontextProvider;
