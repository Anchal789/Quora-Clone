import React, { useContext, useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, Button, Input } from "@mui/material";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import Modal from "react-modal";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { MyContext } from "../../context/Mycontext";
import "./Navbar.css";
import Logout from "../LogoutPage/Logout";
import { useNavigate } from "react-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../assets/firebase";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";

const Navbar = () => {
  const mycontext = useContext(MyContext);
  const loginCred = JSON.parse(localStorage.getItem("loginCred"));
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [userQuestion, setUserQuestion] = useState({
    question: "",
    userName: "",
    userImage: "",
    postedDate: "",
    answers : []
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

  get(
    child(
      ref(database),
      `userQuestions`
    )
  ).then((snapShot) => {
    setUserlength(Object.keys(snapShot.val()).length);
  });

  const handleAddQuestion = async (e) => {
    e.preventDefault();
    setUserQuestion({
      question: input,
      userName: loginCred.name,
      userImage: loginCred.image,
      postedDate: `${date.getFullYear()} ${months[date.getMonth()]}`,
      answers : [""]
    });
    setInput("");
  };

  const modalOpenClose =()=>{
    setOpenModal(!openModal);
    const putData = () => {
      set(ref(database, `userQuestions/${userLength+1}`), {
        userQuestion,
      });
      console.log("successfull");
    };
    putData();
  }

  const auth = getAuth(app);

  useEffect(() => {
    // onValue(
    //   ref(
    //     getDatabase,
    //     `questionDatabase/questions/${mycontext.questionDatabase}`
    //   ),
    //   (snapshot) => {
    //     setQuestionList(snapshot.val());
    //     console.log(snapshot.val());
    //   }
    // );

    // const putData = ()=>{
    //   set(ref(database, "userQuestions"),{
    //     questions
    //   })
    //   console.log("successfull")
    // }
    // putData()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        localStorage.setItem(
          "loginCred",
          JSON.stringify({
            email: user.email,
            name: user.displayName,
            image: user.photoURL,
          })
        );
      } else {
        setUser(null);
      }
    });
    if (user === null) {
      navigate("/login");
      console.error("no user found");
      signOut(auth);
    } 
  }, []);

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/768px-Quora_logo_2015.svg.png?20170609154433"
          alt="logo"
        />
      </div>
      <div className="navbar_icons">
        <div className="navbar_icon">
          <HomeIcon />
        </div>
        <div className="navbar_icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className="navbar_icon">
          <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className="navbar_icon">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="navbar_icon">
          <NotificationsNoneOutlinedIcon />
        </div>
      </div>
      <div className="navbar_input">
        <SearchOutlinedIcon />
        <input id="navbar-input" type={"text"} placeholder="Search Quora" />
      </div>
      <div className="navbar_right">
        <div className="navbar_avatar">
          <Avatar src={loginCred.image} />
        </div>
        <span
          id="logoutDiv"
          style={{ display: "inline", width: "100px", textAlign: "center" }}
          onClick={() => {
            signOut(auth);
            navigate("/login");
          }}
        >
          <LogoutIcon />
        </span>
        <LanguageOutlinedIcon />
        <Button onClick={modalOpenClose}>Add Question</Button>
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
                onChange={(e) => setInput(e.target.value)}
                placeholder="Start your question with 'what', 'How', 'Why' etc."
              />

              <div className="modal_fieldLink">
                <LinkOutlinedIcon />
                <Input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="Optional: include a link that give context"
                />
              </div>
            </div>
            <div className="modal_buttons">
              <button
                className="cancle"
                onClick={modalOpenClose}
              >
                Close
              </button>
              <button type="submit" className="add" onClick={handleAddQuestion}>
                Add Question
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
