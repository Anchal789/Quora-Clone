import React, { useContext, useState } from "react";
import "./Login.css";
import { MyContext } from "../../context/Mycontext";
import { useNavigate } from "react-router";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../assets/firebase";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const [usernameError, setUsernameError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  // const navigate = useNavigate();
  // const auth = getAuth(app);

  const handleRegister = async () => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!usernameRegex.test(state.username)) {
      setUsernameError(
        "Username must be alphanumeric and 3-20 characters long"
      );
    } else {
      setUsernameError("");
    }

    if (!nameRegex.test(state.name)) {
      setNameError("Please enter a valid name");
    } else {
      setNameError("");
    }

    if (!emailRegex.test(state.email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }

    if (!passwordRegex.test(state.password)) {
      setpasswordError(
        "Minimum eight characters, at least one letter, one number and one special character."
      );
    } else {
      setpasswordError("");
    }

    if (
      usernameRegex.test(state.username) &&
      nameRegex.test(state.name) &&
      emailRegex.test(state.email) &&
      passwordRegex.test(state.password)
    ) {
      createUserWithEmailAndPassword(auth, state.email, state.password);
      setRegisterPage(true);
    }
  };

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const myContext = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerPage, setRegisterPage] = useState(false);
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
        // setLoginError("Invalid Credentials");
        console.log(error.FirebaseError);
      });
  };

  const navigatetoLogin = ()=>{
    setRegisterPage(false)
  }

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
        console.log(auth.currentUser.email);
        myContext.setState({
          email: auth.currentUser.email,
          image: "",
          name: "",
        });
        localStorage.setItem(
          "loginCred",
          JSON.stringify({
            email: auth.currentUser.email,
            name: "",
            image: "",
          })
        );
      })
      .catch((error) => {
        setLoginError("Invalid Credentials");
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
          {registerPage ? (
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="login__emailPass">
                <div className="login__inputFields">
                  <div className="login__inputField">
                    <label className="register_label">Username:</label>
                    <input
                      type="text"
                      value={state.username}
                      onChange={handleChange}
                      className="register_input"
                      name="username"
                    />
                    {usernameError && (
                      <span className="error-message">{usernameError}</span>
                    )}
                  </div>
                  <div className="login__inputField">
                    <label className="register_label">Name:</label>
                    <input
                      type="text"
                      value={state.name}
                      onChange={handleChange}
                      className="register_input"
                      name="name"
                    />
                    {nameError && (
                      <span className="error-message">{nameError}</span>
                    )}
                  </div>
                  <div className="login__inputField">
                    <label className="register_label">Email:</label>
                    <input
                      type="email"
                      value={state.email}
                      onChange={handleChange}
                      className="register_input"
                      name="email"
                    />
                    {emailError && (
                      <span className="error-message">{emailError}</span>
                    )}
                  </div>
                  <div className="login__inputField">
                    <label className="register_label">Password:</label>
                    <input
                      type="password"
                      value={state.password}
                      onChange={handleChange}
                      className="register_input"
                      name="password"
                    />
                    {passwordError && (
                      <span className="error-message">{passwordError}</span>
                    )}
                  </div>
                </div>
                <div >
                  <button className="registerButton" onClick={handleRegister}>
                    Register
                  </button>
                  <div className="login_buttons">
                    <p>Already have an account? </p>
                    <button className="registerButton" onClick={navigatetoLogin}>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div className="login__emailPass">
              <div className="login__label">
                <h4>Login</h4>
                <p style={{ color: "red", fontWeight: "bold" }}>{loginError}</p>
              </div>
              <div className="login__inputFields">
                <div className="login__inputField">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                    autoComplete="on"
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
              <div className="login_buttons">
                <button onClick={() => {setRegisterPage(!registerPage)}}>
                  Register
                </button>
                <button onClick={signInUser}>Login</button>
              </div>
            </div>
          )}
        </div>
        <div className="login__footer">
          <p>&copy; Quora Clone Inc. 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
