import React, { useState, useEffect, useContext } from "react";
import { Avatar } from "@mui/material";
import "./Post.css";
import "./modal.css";
import { Button } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Modal from "react-modal";

import {
  FacebookShareButton,
  EmailShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  EmailIcon,
  WorkplaceIcon,
} from "react-share";
import CloseIcon from "@mui/icons-material/Close";
import Popup from "reactjs-popup";
import axios from "axios";
import { MyContext } from "../../context/Mycontext";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { app } from "../../assets/firebase";

const Post = ({ id, question, answers }) => {
  const mycontext = useContext(MyContext);
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userImage: "",
    postDate: "",
    postYear: "",
  });
  const [answerUser, setanswerUser] = useState({
    firstName: "",
    lastName: "",
    userImage: "",
    postDate: "",
    postYear: "",
  });
  const [addAnswer, setAddAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState([]);

  const date = new Date();
  const database = getDatabase(app);
  const loginCred = JSON.parse(localStorage.getItem("loginCred"));
  const [userLength, setUserlength] = useState();

  async function randomUser() {
    const response = await axios.get("https://randomuser.me/api/");
    const userData = await response.data;
    setUser({
      firstName: userData.results[0].name.first,
      lastName: userData.results[0].name.last,
      userImage: userData.results[0].picture.thumbnail,
      postMonth: parseInt(userData.results[0].registered.date.split("-")[1]),
      postYear: parseInt(userData.results[0].registered.date.split("-")[0]),
    });
  }

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

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  get(
    child(
      ref(database),
      `questionDatabase/questions/${mycontext.questionDatabase}/${
        id - 1
      }/useranswers/`
    )
  ).then((snapShot) => {
    setUserAnswer(snapShot.val());
  });

  useEffect(() => {
    randomUser();
    randomAnswerUser();
  }, []);

  const handleAddAnswer = async (e) => {
    e.preventDefault();
    get(
      child(
        ref(database),
        `questionDatabase/questions/${mycontext.questionDatabase}/${
          id - 1
        }/useranswers/`
      )
    ).then((snapShot) => {
      setUserlength(Object.keys(snapShot.val()).length);
      setUserAnswer(snapShot.val());
    });

    const putData = () => {
      set(
        ref(
          database,
          `questionDatabase/questions/${mycontext.questionDatabase}/${
            id - 1
          }/useranswers/${userLength + 1}`
        ),
        {
          answer: addAnswer,
          image: loginCred.image,
          name: loginCred.name,
          postedDate: `${date.getFullYear()} ${months[date.getMonth()]}`,
        }
      );
      console.log("successfull");
    };
    putData();
    setOpenModal(!openModal);
    console.log(userAnswer);
  };

  const modalOpenClose = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="post">
      <div className="post_info">
        <Avatar src={user.userImage} />
        <div className="nameAndDateDiv">
          <h5>
            {user.firstName} {user.lastName}
          </h5>
          <small>
            {user.postYear} {months[user.postMonth]}
          </small>
        </div>
      </div>
      <div className="post_body">
        <div className="post_question">
          <p>{question}</p>

          <Button className="post_btnAnswer" onClick={modalOpenClose}>
            Add Comment
          </Button>
          <Modal
            isOpen={openModal}
            ariaHideApp={false}
            onRequestClose={modalOpenClose}
            shouldCloseOnOverlayClick={false}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {user.firstName} {user.lastName}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {date.getFullYear()} {months[date.getMonth()]}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={addAnswer}
                required
                onChange={(e) => setAddAnswer(e.target.value)}
                placeholder="Enter Your Answer Here"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={modalOpenClose}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAddAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>

        {showAnswer && (
          <>
            <Button
              className="post_btnAnswer"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              {showAnswer ? "Hide Answer" : "View Answers"}
            </Button>
            <div className="post_answer">
              <hr
                style={{
                  backgroundColor: "#989898a3",
                  height: "1px",
                  color: "#989898a3",
                }}
              />
              {answers.map((ans, index) =>
                ans.length === 2 ? (
                  ans.map((an, index) => (
                    <div
                      style={{
                        margin: "10px",
                        wordSpacing: "0.2rem",
                        letterSpacing: "0.05rem",
                      }}
                      key={index}

                    >
                      <div
                        style={{ display: "flex", textAlign: "center" }}
                      >
                        <Avatar src={answerUser.userImage} />
                        <h5 style={{ padding: "5px" }}>
                          {user.firstName} {user.lastName}
                        </h5>
                        {"  "}
                        <small style={{ padding: "5px" }}>
                          {user.postYear} {months[user.postMonth]}
                        </small>
                      </div>
                      <p style={{ margin: "10px 0", textAlign: "start" }}>
                        {an}
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
                ) : (
                  <div
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
                        {user.firstName} {user.lastName}
                      </h5>
                      {"  "}
                      <small style={{ padding: "5px" }}>
                        {user.postYear} {months[user.postMonth]}
                      </small>
                    </div>
                    <p style={{ margin: "10px 0", textAlign: "start" }}>
                      {ans}
                    </p>
                  </div>
                )
              )}
              {Object.keys(userAnswer).map((key, index) =>
                userAnswer[key].answer === "" ? null : (
                  <>
                    <hr
                      style={{
                        backgroundColor: "#989898a3",
                        height: "1px",
                        color: "#989898a3",
                      }}
                      
                    />
                    <div
                      style={{
                        margin: "10px",
                        wordSpacing: "0.2rem",
                        letterSpacing: "0.05rem",
                      }}
                      key={index}

                    >
                      <div
                        style={{ display: "flex", textAlign: "center" }}
                      >
                        <Avatar src={userAnswer[key].image} />
                        <h5 style={{ padding: "5px" }}>
                          {userAnswer[key].name}
                        </h5>
                        {"  "}
                        <small style={{ padding: "5px" }}>
                          {userAnswer[key].postedDate}
                        </small>
                      </div>
                      <p style={{ margin: "10px 0", textAlign: "start" }}>
                        {userAnswer[key].answer}
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
                  </>
                )
              )}
            </div>
          </>
        )}
      </div>

      <div className="post_footer">
        <div className="post_footerActions">
          <div className="post_footerAction">
            <div className="upvote">
              <ThumbUpOutlinedIcon />
              <small>{123}</small>
            </div>
            <div className="downvote">
              <ThumbDownOutlinedIcon />
              <small>{10}</small>
            </div>
          </div>
          <div className="comment" onClick={() => setShowAnswer(!showAnswer)}>
            <ChatBubbleOutlineOutlinedIcon />
            <small>Comments</small>
          </div>
          <div className="share">
            <LoopOutlinedIcon />
            {/* <small>69</small> */}
            <span className="footerText">
              <Popup
                trigger={<button className="sharePopup"> Share </button>}
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <div className="closeBtn">
                      <button className="clsBtn" onClick={() => close()}>
                        <CloseIcon />
                      </button>
                    </div>
                    <div className="content">Share ChitChat with friends</div>
                    <div className="options">
                      <FacebookShareButton
                        url={
                          "https://quora-clone-sanju-manna-2201.netlify.app/"
                        }
                      >
                        <FacebookIcon
                          logoFillColor="white"
                          round={true}
                          size={50}
                        ></FacebookIcon>
                      </FacebookShareButton>
                      <WhatsappShareButton
                        url={
                          "https://quora-clone-sanju-manna-2201.netlify.app/"
                        }
                      >
                        <WhatsappIcon
                          logoFillColor="white"
                          round={true}
                          size={50}
                        ></WhatsappIcon>
                      </WhatsappShareButton>
                      <TelegramShareButton
                        url={
                          "https://quora-clone-sanju-manna-2201.netlify.app/"
                        }
                      >
                        <TelegramIcon
                          logoFillColor="white"
                          round={true}
                          size={50}
                        ></TelegramIcon>
                      </TelegramShareButton>
                      <WorkplaceShareButton
                        url={
                          "https://quora-clone-sanju-manna-2201.netlify.app/"
                        }
                      >
                        <WorkplaceIcon
                          logoFillColor="white"
                          round={true}
                          size={50}
                        ></WorkplaceIcon>
                      </WorkplaceShareButton>
                      <EmailShareButton
                        url={
                          "https://quora-clone-sanju-manna-2201.netlify.app/"
                        }
                      >
                        <EmailIcon
                          logoFillColor="white"
                          round={true}
                          size={50}
                        ></EmailIcon>
                      </EmailShareButton>
                    </div>
                  </div>
                )}
              </Popup>
            </span>
          </div>
        </div>
        <div className="post_more">
          <MoreHorizOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
