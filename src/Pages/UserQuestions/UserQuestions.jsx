import React, { useState, useEffect, Fragment, useContext } from "react";
import { Avatar } from "@mui/material";
import "../Posts/Post.css";
import "../Posts/modal.css";
import { Button, Input } from "@mui/material";
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

const UserQuestion = ({userName, question, userImage, postedDate, answers }) => {
  const mycontext = useContext(MyContext);
  const [openModal, setOpenModal] = useState(false);
  const [addAnswer, setAddAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const date = new Date();
  const loginCred = JSON.parse(localStorage.getItem("loginCred"));

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

  const handleAddAnswer = async (e) => {
    e.preventDefault();
    setAddAnswer("");
    setOpenModal(false);
  };

  return (
    <div className="post">
      <div className="post_info">
        <Avatar src={userImage} />
        <div className="nameAndDateDiv">
          <h5>
            {userName}
          </h5>
          <small>
            {postedDate}
          </small>
        </div>
      </div>
      <div className="post_body">
        <div className="post_question">
          <p>{question}</p>

          <Button className="post_btnAnswer" onClick={() => setOpenModal(true)}>
            Add Comment
          </Button>
          <Modal
            isOpen={openModal}
            ariaHideApp={false}
            onRequestClose={() => setOpenModal(false)}
            shouldCloseOnOverlayClick={false}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by <span className="name">{loginCred.name}</span> {""}
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
              <button className="cancle" onClick={() => setOpenModal(false)}>
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
              
              {/* {answers.map((ans, index) =>
                ans.length === 2 ? (
                  ans.map((an, index) => (
                    <div style={{ margin: "10px", wordSpacing : "0.2rem", letterSpacing : "0.05rem"}}>
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
                  <div style={{ margin: "10px", wordSpacing : "0.2rem", letterSpacing : "0.05rem" }}>
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
              )} */}
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

export default UserQuestion;
