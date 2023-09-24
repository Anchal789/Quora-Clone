import React, { useEffect, useState } from "react";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import "./GiveAnswer.css";
import "../Posts/Post.css";
import "../Posts/modal.css";
import Modal from "react-modal";
import axios from "axios";
import { Avatar } from "@mui/material";

const QuestionBox = ({ props }) => {
  const [addAnswer, setAddAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [answerUser, setanswerUser] = useState({
    firstName: "",
    lastName: "",
    userImage: "",
    postDate: "",
    postYear: "",
  });
  const loginCred = JSON.parse(localStorage.getItem("loginCred"));

  const [userAnswer, setUserAnswer] = useState({
    answer : [],
    image : loginCred.image,
    name : loginCred.name,
    email : loginCred.email
  })

  const date = new Date();


  const modalOpenClose = () => {
    setOpenModal(!openModal);
  };

  async function randomAnswerUser() {
    const response = await axios.get("https://randomuser.me/api/");
    const userData = await response.data;
    setanswerUser({
      firstName: userData.results[0].name.first,
      lastName: userData.results[0].name.last,
      userImage: userData.results[0].picture.thumbnail,
      postMonth: parseInt(userData.results[0].registered.date.split("-")[1]),
      postYear: parseInt(userData.results[0].registered.date.split("-")[0]),
    });
  }

  useEffect(() => {
    randomAnswerUser();
  }, []);

  return (
    <div>
      <div className="post question_post">
        <div className="post_body">
          <div className="post_question">
            <p>{props.text}</p>
          </div>
          <div className="answer_length">
            <p>{props.answers.length + userAnswer.answer.length} answers</p>
          </div>
          <div>
            <Modal
              isOpen={openModal}
              ariaHideApp={false}
              onRequestClose={modalOpenClose}
              shouldCloseOnOverlayClick={false}
            >
              <div className="modal__question">
                <h1>{props.text}</h1>
              </div>
              <div className="modal__answer">
                <textarea
                  value={addAnswer}
                  required
                  onChange={(e) => setAddAnswer(e.target.value)}
                  placeholder="Enter Your Comment Here"
                  type="text"
                ></textarea>
              </div>
              <div className="modal__button">
                <button className="cancle" onClick={modalOpenClose}>
                  Cancel
                </button>
                <button
                  type="sumbit"
                  onClick={() => {
                    // props.answers.push(addAnswer);
                    userAnswer.answer.push(addAnswer);
                    setAddAnswer("");
                    setOpenModal(!openModal);
                  }}
                  className="add"
                >
                  Add Comment
                </button>
              </div>
            </Modal>
          </div>
          {showAnswer && (
            <>
              <button
                className="post_btnAnswer"
                onClick={() => setShowAnswer(!showAnswer)}
              >
                {showAnswer ? "Hide Answers" : "View Answers"}
              </button>
              <div className="post_answer">
                <hr
                  style={{
                    backgroundColor: "#989898a3",
                    height: "1px",
                    color: "#989898a3",
                  }}
                />
                {props.answers.length > 0 ? (
                  <>{
                    props.answers.map((answer, index) => (
                      <div
                        key={index}
                        style={{
                          margin: "10px",
                          wordSpacing: "0.2rem",
                          letterSpacing: "0.05rem",
                        }}
                      >
                        <div
                          style={{ display: "flex", textAlign: "center" }}
                          key={index}
                        >
                          <Avatar src={answerUser.userImage} />
                          <h5 style={{ padding: "5px" }}>
                            {answerUser.firstName} {answerUser.lastName}
                          </h5>
                          {"  "}
                          <small style={{ padding: "5px" }}>
                            {answerUser.postYear}
                          </small>
                        </div>
                        <p style={{ margin: "10px 0", textAlign: "start" }}>
                          {answer}
                        </p>
                        <hr
                          style={{
                            backgroundColor: "#989898a3",
                            height: "1px",
                            color: "#989898a3",
                            margin: "10px",
                          }}
                        />
                      </div>
                    ))
                  }{
                    userAnswer.answer.map((answer,index)=>(
                      <div
                        key={index}
                        style={{
                          margin: "10px",
                          wordSpacing: "0.2rem",
                          letterSpacing: "0.05rem",
                        }}
                      >
                        <div
                          style={{ display: "flex", textAlign: "center" }}
                          key={index}
                        >
                          <Avatar src={loginCred.image} />
                          <h5 style={{ padding: "5px" }}>
                            {loginCred.email.split("@")[0]}
                          </h5>
                          {"  "}
                          <small style={{ padding: "5px" }}>
                            {date.getFullYear()}
                          </small>
                        </div>
                        <p style={{ margin: "10px 0", textAlign: "start" }}>
                          {answer}
                        </p>
                        <hr
                          style={{
                            backgroundColor: "#989898a3",
                            height: "1px",
                            color: "#989898a3",
                            margin: "10px",
                          }}
                        />
                      </div>
                    ))
                  }</>
                ) : (
                  <div
                    style={{
                      margin: "10px",
                      wordSpacing: "0.2rem",
                      letterSpacing: "0.05rem",
                    }}
                  >
                    No Answers Yet
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <div className="post_footer">
          <div className="post_footerActions">
            <div className="comment" onClick={() => setShowAnswer(!showAnswer)}>
              <ChatBubbleOutlineOutlinedIcon />
              <small style={{ margin: "5px" }}>Answers</small>
            </div>
            <span className="footerText">
              <button type="sumbit" onClick={modalOpenClose} className="add">
                Add Comment
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
