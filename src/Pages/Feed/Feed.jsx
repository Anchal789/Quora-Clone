import React, { useContext, useState } from "react";
import "./Feed.css";
import QueryBox from "../QueryBox/Querybox";
import Post from "../Posts/Posts";
import {  get, child, ref, getDatabase } from "firebase/database";
import { app } from "../../assets/firebase";
import { MyContext } from "../../context/Mycontext";
import UserQuestion from "../UserQuestions/UserQuestions";

const Feed = () => {
  const mycontext = useContext(MyContext);
  const database = getDatabase(app);
  const [questionList, setQuestionList] = useState([]);
  const [userQuestionList, setUserQuestionList] = useState([]);

  get(
    child(
      ref(database),
      `questionDatabase/questions/${mycontext.questionDatabase}`
    )
  ).then((snapShot) => {
    setQuestionList(snapShot.val());
  });
  

  get(
    child(
      ref(database),
      `userQuestions`
    )
  ).then((snapShot) => {
    setUserQuestionList(snapShot.val());
  });

  return (
    <div className="feed">
      <QueryBox />
      {
        userQuestionList.map((userQuestion,index)=>(
          userQuestion.userQuestion.question === "" ? null : (<UserQuestion key={index} userName={userQuestion.userQuestion.userName} question={userQuestion.userQuestion.question} userImage={userQuestion.userQuestion.userImage} postedDate={userQuestion.userQuestion.postedDate} answers={userQuestion.userQuestion.answers}/>)
        ))
      }
      
      {questionList.map((question, index) => (
        <Post key={index} id={question.id} question={question.question} answers={[question.answers || question.answer]}/>
      ))}
    </div>
  );
};

export default Feed;
