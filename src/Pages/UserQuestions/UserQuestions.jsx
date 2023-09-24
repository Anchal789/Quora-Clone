import React, { useState } from "react";
import { Avatar } from "@mui/material";
import "../Posts/Post.css";
import "../Posts/modal.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import Modal from "react-modal";
import "./UserQuestion.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

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

const UserQuestion = ({ userName, question, userImage, postedDate }) => {
  const [openModal, setOpenModal] = useState(false);
  
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
  const [addUserAnswer, setUserAddAnswer] = useState({
    userName: loginCred.name,
    userImage: loginCred.image,
    postedDate: `${date.getFullYear()} ${months[date.getMonth()]}`,
    userAnswer: [],
  });
  const [showAnswer, setShowAnswer] = useState(false);
  const [input, setInput] = useState("");
  const [like, setLike] = useState(false);
  const handelLike = ()=>{
    setLike(!like);
  }

  return (
    <div className="post">
      <div className="post_info">
        <Avatar src={userImage} />
        <div className="nameAndDateDiv">
          <h5>{userName}</h5>
          <small>{postedDate}</small>
        </div>
      </div>
      <div className="post_body">
        <div className="post_question">
          <p>{question}</p>

          <Modal
            isOpen={openModal}
            ariaHideApp={false}
            onRequestClose={() => setOpenModal(false)}
            shouldCloseOnOverlayClick={false}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {loginCred.name || loginCred.email.split("@")[0]}
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
                value={input}
                required
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                placeholder="Enter Your Comment Here"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setOpenModal(false)}>
                Cancel
              </button>
              <button
                type="sumbit"
                onClick={() => {
                  if(input===""){
                    alert("Please Write Something");
                  }else{
                    addUserAnswer.userAnswer.push(input);
                    setOpenModal(!openModal);
                    setInput("")
                  }
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
              {showAnswer ? "Hide Comments" : "View Comments"}
            </button>
            <div className="post_answer">
              <hr
                style={{
                  backgroundColor: "#989898a3",
                  height: "1px",
                  color: "#989898a3",
                }}
              />

              {addUserAnswer.userAnswer.map((ans, index) =>
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
                      <div style={{ display: "flex", textAlign: "center" }}>
                        <Avatar src={loginCred.image} />
                        <h5 style={{ padding: "5px" }}>
                          {loginCred.image === ""
                            ? loginCred.email
                            : loginCred.image}
                        </h5>
                        {"  "}
                        <small style={{ padding: "5px" }}>
                          {addUserAnswer.postedDate}
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
                    key={index}
                  >
                    <div style={{ display: "flex", textAlign: "center" }}>
                      <Avatar src={loginCred.image} />
                      <h5 style={{ padding: "5px" }}>
                        {loginCred.image === ""
                          ? loginCred.email
                          : loginCred.image}
                      </h5>
                      {"  "}
                      <small style={{ padding: "5px" }}>
                        {addUserAnswer.postedDate}
                      </small>
                    </div>
                    <p style={{ margin: "10px 0", textAlign: "start" }}>
                      {ans}
                    </p>
                  </div>
                )
              )}
            </div>
          </>
        )}
      </div>

      <div className="post_footer">
        <div className="post_footerActions">
          <div className="likeBtn">
            {like ? <FavoriteOutlinedIcon onClick={handelLike} className="like"/> : <FavoriteBorderOutlinedIcon className="unlike" onClick={handelLike}/>}
          </div>
          <div className="post_footerAction">
            <button
              className="post_btnAnswer"
              onClick={() => setOpenModal(true)}
            >
              Add Comment
            </button>
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
        {/* <div className="post_more">
          <MoreHorizOutlinedIcon />
        </div> */}
      </div>
    </div>
  );
};

export default UserQuestion;
