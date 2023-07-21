import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import GoogleLogin from "react-google-login";
import Logout from "../LogoutPage/Logout";
import "./Login.css";
import { MyContext } from "../../context/Mycontext";
import { useNavigate } from "react-router";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../assets/firebase";

const Login = () => {
  const myContext = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const clientId =
    "497854168642-sihpn5dsqj7q8spi11gerjbbug1d11o4.apps.googleusercontent.com";

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        navigate("/");
        myContext.setState({
          email: auth.currentUser.email,
          image: auth.currentUser.photoURL,
          name: auth.currentUser.displayName,
        });
      })
      .catch((error) => {
        setLoginError("Invalid Credentials");
        console.log(error.FirebaseError);
      });
  };

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setLoginError("Invalid Credentials");
        console.log(error.FirebaseError);
      });
  };

  const onFailure = (res) => {
    console.log("Login Failure", res);
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
            <div className="login__authOption">
              <button onClick={signUpWithGoogle}>Sign in With Google</button>
            </div>
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <span>Continue With Facebook</span>
            </div>
          </div>
          <div className="login__emailPass">
            <div className="login__label">
              <h4>Login/Register</h4>
              <p style={{ color: "red", fontWeight: "bold" }}>{loginError}</p>
            </div>
            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="login__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login__forgButt">
              <small>Forgot Password?</small>
              <button onClick={() => navigate("/register")}>Register</button>
            </div>
            <button onClick={signInUser}>Login</button>
          </div>
        </div>
        <div className="login__lang">
          <p>हिन्दी</p>
        </div>
        <div className="login__footer">
          <p>About</p>
          <p>Languages</p>
          <p>Careers</p>
          <p>Businesses</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>&copy; Quora Clone Inc. 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
