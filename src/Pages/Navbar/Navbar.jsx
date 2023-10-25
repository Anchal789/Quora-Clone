import React, { useContext, useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import EditNoteIcon from "@mui/icons-material/EditNote";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { Avatar, Input } from "@mui/material";
import Modal from "react-modal";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../assets/firebase";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { MyContext } from "../../context/Mycontext";
import { Popover } from "antd";
import "./Navbar.css";

const Navbar = () => {
  const loginCred = JSON.parse(localStorage.getItem("loginCred"));
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [comingSoonCard, setComingSoonCard] = useState(false);
  const [notificationCard, setNotificationCard] = useState(false);
  // const navigate = useNavigate();
  const [userQuestion, setUserQuestion] = useState({
    question: "",
    userName: "",
    userImage: "",
    postedDate: "",
    answers: [],
  });
  const [userLength, setUserlength] = useState(0);

  const date = new Date();
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
  const database = getDatabase(app);
  const navigate = useNavigate();
  const auth = getAuth(app);
  const mycontext = useContext(MyContext);

  get(child(ref(database), `userQuestions`)).then((snapShot) => {
    setUserlength(Object.keys(snapShot.val()).length);
  });

  const handleAddQuestion = async (e) => {
    e.preventDefault();
    setUserQuestion({
      question: input,
      userName: loginCred.name,
      userImage: loginCred.image,
      postedDate: `${date.getFullYear()} ${months[date.getMonth()]}`,
      answers: [""],
    });
    const putData = () => {
      if (userQuestion.question === "") {
        alert("Please write something.");
      } else {
        set(ref(database, `userQuestions/${userLength + 1}`), {
          userQuestion,
        });
      }
    };
    putData();
    setInput("");
    modalOpenClose();
  };

  const modalOpenClose = () => {
    setOpenModal(!openModal);
  };

  const handleComingSoonCard = () => {
    setNotificationCard(!notificationCard);
    setComingSoonCard(!comingSoonCard);
  };

  const handleNotificationCard = () => {
    setComingSoonCard(!comingSoonCard);
    setNotificationCard(!notificationCard);
  };
  // const auth = getAuth(app

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <>
      <div className="navbar">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <div className="navbar_logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/768px-Quora_logo_2015.svg.png?20170609154433"
            alt="logo"
          />
        </div>
        <div className="navbar_middle">
          <div
            className="navbar_icon"
            onClick={() => {
              mycontext.setAnotherFeed("false");
              mycontext.setQuestionDatabase("userPost");
              mycontext.setFollowing("");
            }}
          >
            <HomeIcon
              style={{
                color:
                  mycontext.questionDatabase === "userPost" ? "#a0201c" : null,
              }}
            />
          </div>
          <div className="navbar_avatar_shown_on_small">
            <Avatar src={loginCred.image} />
            <h5 className="name_of_user">{loginCred.name || loginCred.email.split("@")[0]}</h5>
          </div>
          <button
            onClick={modalOpenClose}
            className="add_button_shown_on_small add"
          >
            Add Question
          </button>
          <div className="navbar_icon navbar_middle_icon">
            <FeaturedPlayListOutlinedIcon
              onClick={() => {
                mycontext.setAnotherFeed("true");
                mycontext.setFollowing("following");
                mycontext.setQuestionDatabase("notuserPost");
              }}
              style={{
                color: mycontext.following === "following" ? "#a0201c" : null,
              }}
            />
          </div>
          <div className="navbar_icon navbar_middle_icon">
            <EditNoteIcon
              onClick={() => {
                mycontext.setAnotherFeed("true");
                mycontext.setFollowing("postAnswer");
                mycontext.setQuestionDatabase("notuserPost");
              }}
              style={{
                color: mycontext.following === "postAnswer" ? "#a0201c" : null,
              }}
            />
          </div>
          <div className="navbar_icon navbar_middle_icon">
            <PeopleAltOutlinedIcon
              onClick={() => {
                setComingSoonCard(!comingSoonCard);
                setNotificationCard(false);
              }}
            />
            <Popover
              content={
                <h4 onClick={handleComingSoonCard}>Feature Coming Soon</h4>
              }
              title="Spaces"
              trigger="click"
              open={comingSoonCard}
            ></Popover>
          </div>
          <div className="navbar_icon navbar_middle_icon">
            <NotificationsNoneOutlinedIcon
              onClick={() => {
                setNotificationCard(!notificationCard);
                setComingSoonCard(false);
              }}
            />
            <Popover
              content={
                <h4 onClick={handleNotificationCard}>No New Notifications</h4>
              }
              title="Notifications"
              trigger="click"
              open={notificationCard}
            ></Popover>
          </div>
        </div>
        <div className="navbar_right">
          <div className="navbar_avatar">
            <Avatar src={loginCred.image} />
            <h5>{loginCred.name || loginCred.email.split("@")[0]}</h5>
          </div>

          <span
            id="logoutDiv"
            style={{ display: "inline", width: "100px", textAlign: "center" }}
            onClick={() => {
              signOut(auth);
              navigate("/");
            }}
          >
            <LogoutIcon />
          </span>
          <div id="google_translate_element"></div>
          <button onClick={modalOpenClose} className="add_button">
            Add Question
          </button>
          <Modal
            isOpen={openModal}
            ariaHideApp={false}
            onRequestClose={modalOpenClose}
            shouldCloseOnOverlayClick={false}
          >
            <div className="modal_title">
              <div className="headings">
                <h5>Add Question</h5>
                <h5>Share Link</h5>
              </div>
              <div className="modal_info">
                <Avatar className="avatar" src={loginCred.image} />
                <p>{loginCred.name ? loginCred.name : loginCred.email} asked</p>
                <div className="modal_scope">
                  <PeopleAltOutlinedIcon />
                  <p>public</p>
                  <ExpandMoreOutlinedIcon />
                </div>
              </div>
              <div className="modal_field">
                <Input
                  type="text"
                  value={input}
                  required
                  onInput={(e) => setInput(e.target.value)}
                  placeholder=""
                />

                <div className="modal_fieldLink">
                  <LinkOutlinedIcon />
                  <Input
                    type="text"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="Optional : Link"
                  />
                </div>
              </div>
              <div className="modal_buttons">
                <button className="cancle" onClick={modalOpenClose}>
                  Close
                </button>
                <button
                  type="submit"
                  className="add"
                  onClick={handleAddQuestion}
                >
                  Add Question
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <div className="downbar">
        <div className="navbar_icon ">
          <FeaturedPlayListOutlinedIcon
            onClick={() => {
              mycontext.setAnotherFeed("true");
              mycontext.setFollowing("following");
              mycontext.setQuestionDatabase("notuserPost");
            }}
            style={{
              color: mycontext.following === "following" ? "#a0201c" : null,
            }}
          />
        </div>
        <div className="navbar_icon ">
          <EditNoteIcon
            onClick={() => {
              mycontext.setAnotherFeed("true");
              mycontext.setFollowing("postAnswer");
              mycontext.setQuestionDatabase("notuserPost");
            }}
            style={{
              color: mycontext.following === "postAnswer" ? "#a0201c" : null,
            }}
          />
        </div>
        <div className="navbar_icon ">
          <PeopleAltOutlinedIcon
            onClick={() => {
              setComingSoonCard(!comingSoonCard);
              setNotificationCard(false);
            }}
          />
          <Popover
            content={
              <h4 onClick={handleComingSoonCard}>Feature Coming Soon</h4>
            }
            title="Spaces"
            trigger="click"
            open={comingSoonCard}
          ></Popover>
        </div>
        <div className="navbar_icon ">
          <NotificationsNoneOutlinedIcon
            onClick={() => {
              setNotificationCard(!notificationCard);
              setComingSoonCard(false);
            }}
          />
          <Popover
            content={
              <h4 onClick={handleNotificationCard}>No New Notifications</h4>
            }
            title="Notifications"
            trigger="click"
            open={notificationCard}
          ></Popover>
        </div>
        <span
          id="logoutDiv"
          style={{ display: "inline", width: "100px", textAlign: "center" }}
          onClick={() => {
            signOut(auth);
            navigate("/");
          }}
        >
          <LogoutIcon />
        </span>
      </div>
    </>
  );
};

export default Navbar;
