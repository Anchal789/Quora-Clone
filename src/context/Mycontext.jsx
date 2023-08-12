import React, { createContext, useState } from "react";

export const MyContext = createContext();

const MycontextProvider = (props) => {
  const [state, setState] = useState({
    email : "",
    image : "",
    name: "",
  });

  const [questionDatabase, setQuestionDatabase] = useState("userPost");
  const [anotherFeed, setAnotherFeed] = useState("false");
  const [following, setFollowing] = useState("");
 
  const [login, setLogin] = useState(false);
  const loginStatus = () => {
    setLogin(!login);
  };

  const unpdateContext = (key, value) => {
    setState({ ...state, [key]: value });
  };
  return (
    <MyContext.Provider value={{ state,setState, unpdateContext, login, loginStatus,questionDatabase,setQuestionDatabase, setAnotherFeed, anotherFeed, following,setFollowing }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MycontextProvider;
