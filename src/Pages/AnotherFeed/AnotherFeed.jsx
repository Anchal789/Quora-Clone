import React, { useContext } from "react";
import { MyContext } from "../../context/Mycontext";
import Following from "../Following/Following";
import GiveAnswer from "../GiveAnswer/GiveAnswer";

const AnotherFeed = () => {
  const mycontext = useContext(MyContext);
  return (
    <div>
      {mycontext.following === "following" ? <Following /> : <GiveAnswer />}
    </div>
  );
};

export default AnotherFeed;
