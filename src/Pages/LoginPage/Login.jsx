import React, { useContext } from "react";
import "./Login.css";
import { MyContext } from "../../context/Mycontext";
import { useNavigate } from "react-router";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../assets/firebase";

const Login = () => {

 

  const myContext = useContext(MyContext);
  const navigate = useNavigate();
  // const clientId =
  //   "497854168642-sihpn5dsqj7q8spi11gerjbbug1d11o4.apps.googleusercontent.com";

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        navigate("/home");
        myContext.setState({
          email: auth.currentUser.email,
          image: auth.currentUser.photoURL,
          name: auth.currentUser.displayName,
        });
        localStorage.setItem(
          "loginCred",
          JSON.stringify({
            email: auth.currentUser.email,
            name: auth.currentUser.displayName,
            image: auth.currentUser.photoURL,
          })
        );
      })
      .catch((error) => {
        console.log(error.FirebaseError);
      });
  };


  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
            alt=""
          />
        </div>
        <div className="login__desc">
          <p>A Place to Share knowledge and better understand the world</p>
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="g-sign-in-button" onClick={signUpWithGoogle}>
              <div className="content-wrapper">
                <div className="logo-wrapper">
                  <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt=""
                  />
                </div>
                <span className="text-container">
                  <span>Sign in with Google</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="login__footer">
          <p>&copy; Quora Clone Inc. 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
